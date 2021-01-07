import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class CodeInput extends React.Component {
  render() {
    return (
      <div>
      <h1>Program</h1>
      <form>
      {/* <label>
        Name:
        <input type='text' name='name' />
      </label> */}
      <textarea rows='40' cols='50'>
        Input machine instructions here.
      </textarea>
      </form>
      </div>      
    )
  }
}

class Cell extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

class Registers extends React.Component {

  render(){
    let i;
    let registers = [];
    for (i = 0; i < 16; i++ ) {
      registers.push(<Cell name='register'/>);
    };
    return (
      <div>
        {registers}
      </div>
    )
  }
}

class RAM extends React.Component {
  render() {
    let i = 0;
    let ram = [];
    for(i=0; i<256; i++){
      ram.push(<Cell name='RAM'/>);
    };
  return (
    <div>
      {ram}
    </div>
    )
  }
}

class Vole extends React.Component {
  render() {
    return (
      <div>
        <h1>Vole: a Simplified Computer</h1>
        <CodeInput />
        <h1>Registers</h1>
        <Registers />
        <h1>RAM</h1>
        <RAM />
      </div>
      
    )
  }
}

ReactDOM.render(<Vole />, document.getElementById('root'))