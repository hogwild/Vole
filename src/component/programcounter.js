export function ProgramCounter(props) {
    return <div className="PC" >
        <label htmlFor={"PC"} style={{display:"table", width: "100%"}}>Program Counter</label>
        <input type="text" id={"PC"} style={{display:"table", width:"20px"}} value={"A0"}/>
    </div>
}