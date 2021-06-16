import { Registers } from "./registers.js";
import { ProgramCounter } from "./programcounter.js";
import { InstructionRegister } from "./instructionregister.js";
import { Start } from "./start.js";


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
            <Start />
        </div>
    </div>
} 

