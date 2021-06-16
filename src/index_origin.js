
import React  from 'react';
import ReactDOM  from 'react-dom';
import './style.css';


function Cell(props) {
    const { name } = props;
    return <div className='cell2' style={{width:'48px', display:'table'}}>
        <label for={name} style={{display:"table-cell", width: "50%"}}>{name}</label>
        <input type="text" id={name} style={{display:"table-cell", width:"80%"}} />
    </div>
}

function Registers(props) {
    const { num } = props;
    const registers = new Array();
    for(let i=0; i<num; i++) {
        // console.log(i);
        registers.push(i.toString(16).toUpperCase());
    };
    return <div className='register-set'>
        <p>Registers</p>
        {registers.map( r => {
            return <Cell name={r} />
        })}
    </div>
}

function ProgramCounter(props) {
    return <div className="PC" >
        <label for={"PC"} style={{display:"table", width: "100%"}}>Program Counter</label>
        <input type="text" id={"PC"} style={{display:"table", width:"20px"}} />
    </div>
}

function InstructionRegister(props){
    return <div className="IR">
         <label for={"IR"} style={{display:"table", width: "100%"}}>Instruction Register</label>
        <input type="text" id={"IR"} style={{display:"table", width:"40px"}} />
    </div>
}

function Start(props){
    return <div className="startbutton">
        <button type="button" onClick={myFunction}>Start</button>
    </div>
}

function myFunction() {
    console.log("click!");
}

function CPU(props){
    const num = 16;
    return <div className="CPU">
        <h2>CPU</h2>
        <div className="leftcolumn">
            <Registers num={num}/>
        </div>
        <div className="rightcolumn">
            <ProgramCounter />
            <InstructionRegister />
            <Start />
        </div>
    </div>
} 

function Memory(props){
    const num = 256
    const memory = new Array();
    for(let i=0; i<num; i++) {
        // console.log(i);
        if (i < 16) {
            memory.push("0"+i.toString(16).toUpperCase());
        } else {
            memory.push(i.toString(16).toUpperCase());
        }
    };
    return <div className='memory'>
        <h2>Memory</h2>
        <div className="memorycell">
        {memory.map( m => {
            return <Cell name={m} />
        })}
        </div>
    </div>
}

function Vole(props){
    return <div style={{textAlign: "center", width: "800px", height: "600px"}}>
        <h1>Vole: a simple computer</h1>
        <div style={{float:"left", width:"33%", height: "100%", backgroundColor:"orange"}}>
            <CPU/>
        </div>
        <div style={{float:"right", width:"67%", height: "100%", backgroundColor:"green"}}>
            <Memory/>
        </div>
    </div>
}

ReactDOM.render( <Vole/>, document.getElementById('root'));
