
import React  from 'react';
import ReactDOM  from 'react-dom';
import './style.css';
import { CodeForm } from "./component/codeform.js";
import { CPU } from "./component/cpu.js";
import { Memory } from "./component/memory.js";


function Vole(props){
    return <div style={{textAlign: "center", width: "1100px", height: "600px"}}>
        <h1>Vole: a simple computer</h1>
        <div style={{float:"left", width:"25%", height: "100%", backgroundColor:"pink"}}>
            <CodeForm />
        </div>
        <div style={{float:"left", width:"25%", height: "100%", backgroundColor:"orange"}}>
            <CPU/>
        </div>
        <div style={{float:"left", width:"50%", height: "100%", backgroundColor:"green"}}>
            <Memory/>
        </div>
        
    </div>
}

ReactDOM.render( <Vole/>, document.getElementById('root'));
