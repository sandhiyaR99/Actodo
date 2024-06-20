function Todoact(props) {
    const actArr = props.actArr
    const setactArr = props.setactArr

    const deleteact = (deleteindex) => {
        let tempArr = actArr.filter(function (item) {
            if (deleteindex == item.id) {
                return false
            }
            else {
                return true
            }
        })
        setactArr(tempArr)
    }

    return (
        <div className="flex justify-between">
            <p key={props.index}>{props.index + 1}. {props.act}</p>
            <button onClick={() => { deleteact(props.id) }}> <i className="fa-solid fa-trash" style={{color: "#be1324"}}></i> </button>
        </div>
    )
}
export default Todoact