import React from 'react';
import ReactDOM from 'react-dom';
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
    {console.log(this.input.current.value.split(" "))};
    alert('A program was submitted: '+ this.input.current.value);
    event.preventDefault();
    
  }

  render() {
    // {console.log(this.input.current.value)};
    return (
      <div className='program'>
        <h1>Program</h1>
        <form onSubmit={this.handleSubmit}>
          {/* <textarea rows='40' cols='40' value={this.state.value} onChange={this.handleChange}/> */}
          <textarea rows='40' cols='40' placeholder='Please input your code here.' ref={this.input}/>
          <button>
          Run
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
      registers.push(<Cell index={i.toString(16).toUpperCase()} value='AF'/>);
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
          <Cell index='PC' value='F8'/>
        </div>
      )
      }else{
        if(this.props.type === 'ir'){
          return (
            <div className='ir'>
              <h4>Instruction Registor</h4>
              <Cell index='IR' value='AFF8'/>
          </div>
          )
        }
      }
    }
  }
}



class RAM extends React.Component {
  render() {
    let i = 0;
    let ram = [];

    for(i=0; i<this.props.num; i++){
      ram.push(<Cell index={i.toString(16).toUpperCase()} value='FF'/>);
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
  render() {
    return (
      <div>
        <h1>Vole: a simplified computer</h1>
        <CodeForm />
        {/* <h1>Registers</h1> */}
        <Registers num='16' type='register'/>
        <Registers num='1' type='pc'/>
        <Registers num='1' type='ir'/>
        {/* <h1>RAM</h1> */}
        <RAM num='256'/>
      </div>
      
    )
  }
}

ReactDOM.render(<Vole />, document.getElementById('root'))