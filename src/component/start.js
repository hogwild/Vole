import { fetch, execute } from "../utils/run.js"


const run = () => {
    //execute(fetch());
    // console.log(getMemoryValue("00"));
    let stop = false;
    while(!stop){
        stop = execute(fetch());
    };
};

const step = () => {
    execute(fetch());
};

export function Step(props) {
    return <div className="startbutton">
        <button type="button" onClick={step}>Step</button>
    </div>
}
export function Start(props){
    return <div className="startbutton">
        <button type="button" onClick={run}>Run</button>
    </div>
};

