import { load } from "../utils/load.js";

export function CodeForm (props) {
    const { input } = props;
    return <div className='program'>
        <h2>Program</h2>
        <form >
            <textarea id="code" rows={'25'} cols={'30'} placeholder={'Please input your code here.'}/>
            <button type="button" onClick={load}>
                Load
            </button>
        </form>
    </div>
}
