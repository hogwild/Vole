import { Registers } from "./registers.js";
import { ProgramCounter } from "./programcounter.js";
import { InstructionRegister } from "./instructionregister.js";
import { Step, Start } from "./start.js";


export function CPU(props){
    const num = 16;
    return <div className="CPU">
        <h2>CPU</h2>
        <div className="leftcolumn">
            <Registers num={num}/>
        </div>
        <div className="rightcolumn">
            <ProgramCounter />
            <InstructionRegister />
            <div style={{ float: "left", width:"50%"}}>
                <Step />
            </div>
           <div style={{ float: "right", width:"50%"}}>
                <Start />
           </div>
           
        </div>
    </div>
} 

