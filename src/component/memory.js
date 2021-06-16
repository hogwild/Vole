import { Cell } from "./cell.js";


export function Memory(props){
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
            return <Cell key={m} type={"mem"} name={m} />
        })}
        </div>
    </div>
}