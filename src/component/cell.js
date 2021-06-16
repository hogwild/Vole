export function Cell(props) {
    const { type, name } = props;
    return <div className='cell2' style={{width:'48px', display:'table'}}>
        <label htmlFor={type+name} style={{display:"table-cell", width: "50%", textAlign:"center"}}>{name}</label>
        <input type="text" id={type+name} style={{display:"table-cell", width:"80%"}} />
    </div>
}