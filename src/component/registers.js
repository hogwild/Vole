import { Cell } from "./cell.js";

export function Registers(props) {
    const { num } = props;
    const registers = new Array();
    for(let i=0; i<num; i++) {
        // console.log(i);
        registers.push(i.toString(16).toUpperCase());
    };
    return <div className='register-set'>
        <p>Registers</p>
        {registers.map( r => {
            return <Cell key={r} type={"reg"} name={r} />
        })}
    </div>
}
