import React from 'react';
import ReactDOM from 'react-dom';
// import update from 'react-addons-update';
import './index.css';
import { run } from './run.js';

class CodeForm extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   value:'Input your program here.',
    // };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }
  // handleChange(event) {
  //   this.setState({
  //     value: event.target.value
  //   });
  // }

  handleSubmit(event) {
    // {console.log(this.input.current.value.split(" "))};
    // {run(this.input.current.value)};
    // alert('A program was submitted: '+ this.input.current.value);
    // console.log(this.input.current.value);
    
    this.props.onSubmit(this.input.current.value);
    event.preventDefault();
    
    
  }

  render() {
    // {console.log(this.input.current.value)};
    return (
      <div className='program'>
        <h1>Program</h1>
        {/* <form > */}
        <form onSubmit={this.handleSubmit}>
          {/* <textarea rows='40' cols='40' value={this.state.value} onChange={this.handleChange}/> */}
          <textarea rows='40' cols='40' placeholder='Please input your code here.' ref={this.input}/>
          <button>
          Load
        </button>
        </form>
      </div>      
    )
  }
}


class Cell extends React.Component {

  render() {
    return (
        <div className='cell'>
        <button className='index'>
          {this.props.index}
        </button>
        <button className='content'>
          {this.props.value}
        </button>
        </div>
    )
  }
}

class Registers extends React.Component {
  render(){
    let i;
    let registers = [];
    for (i = 0; i < this.props.num; i++ ) {
      registers.push(<Cell index={i.toString(16).toUpperCase()} value={this.props.content[i]}/>);
    };
    if(this.props.type === 'register') {
      return (
        <div className='registers'>
          <h1>Registers</h1>
          {registers}
        </div>
      )
    }else{
      if(this.props.type === 'pc'){
      return (
        <div className='pc'>
          <h4>Program counter</h4>
          <Cell index='PC' value={this.props.content}/>
        </div>
      )
      }else{
        if(this.props.type === 'ir'){
          return (
            <div className='ir'>
              <h4>Instruction Registor</h4>
              <Cell index='IR' value={this.props.content}/>
          </div>
          )
        }
      }
    }
  }
}


class RAM extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state ={
  //     ram: [],
  //   }
  // }
  render() {
    let i = 0;
    let ram = [];
    let idx;
    for(i=0; i<this.props.num; i++){
      idx = i.toString(16).toUpperCase();
      if(idx.length === 1){
        idx = '0' + idx;
      };
      ram.push(<Cell index={idx} value={this.props.content[i]}/>);
      // this.setState({
      //   ram: [...this.state.ram, <Cell index={i.toString(16).toUpperCase()} value='FF'/>],
      // });
      // this.setState({
      //   ram: this.state.ram.concat([<Cell index={i.toString(16).toUpperCase()} value='FF'/>])})
      // this.state.ram.push(<Cell index={i.toString(16).toUpperCase()} value='00'/>);
    };
  return (
    <div className='ram'>
      <h1>Main Memory</h1>
      {ram}
    </div>
    )
  }
}


class Vole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ramContent: Array(props.numRam).fill('00'),
      regContent: Array(props.numReg).fill('00'),
      pcContent: '00',
      irContent: '0000',
    };
    this.runProgram = this.runProgram.bind(this);
  }

  runProgram(str){
    // const program = this.state.program;
    //console.log(str);
    // event.preventDefault();
    let inst = run(str);
    let ramContent = this.state.ramContent;
    let i, j;
    for (i=0; i<inst.length; i++){
      j = 2*i
      ramContent[j] = inst[i].slice(0, 2);
      ramContent[j+1] = inst[i].slice(2, 4);
    };
    this.setState({
      ramContent: ramContent,
      // regContent: Array(this.props.numReg).fill('00'),
      pcContent: 'FF',
      // irContent: 'FFFF',
    })
  
    // console.log(instSplited);
    // this.setState((state) => ({
    //   ramContent: state.map((s, i) => {
    //     if(i < instSplited.length){
    //       return instSplited[i];
    //     } else {
    //       return s;
    //     }
    //   }),
    //   regContent: Array(16).fill('AA'),
    //   pcContent: 'FF',
    //   irContent: 'FFFF',
    // }))
  } 

  // updateState(){
  //   this.setState({
  //     ramContent: Array(256).fill('AA'),
  //     regContent: Array(16).fill('AA'),
  //     pcContent: 'FF',
  //     irContent: 'FFFF',
  //   });
  // }
    // event.preventDefault();
    
  
  

  render() {
    /* handling the programm here, update the content of registers, pc, ir and ram*/
    // console.log(this.state.pcContent);
    const regContent = this.state.regContent;
    const pcContent = this.state.pcContent;
    const irContent = this.state.irContent;
    const ramContent = this.state.ramContent;
    return (
      <div>
        <h1>Vole: a simplified computer</h1>
        <CodeForm onSubmit={this.runProgram}/>
        {/* <h1>Registers</h1> */}
        <Registers num={this.props.numReg} type='register' content={regContent}/>
        <Registers num={1} type='pc' content={pcContent} />
        <Registers num={1} type='ir' content={irContent} />
        {/* <h1>RAM</h1> */}
        <RAM num={this.props.numRam} content={ramContent}/>
        {/* <RunButton /> */}
      </div>
    )
  }
}

ReactDOM.render(<Vole numReg={16} numRam={256} />, document.getElementById('root'))