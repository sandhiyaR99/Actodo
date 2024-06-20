import Todoact from "./Todoact"
function Todolist(props) {
    const actArr= props.actArr
    const setactArr=props.setactArr

    return (
        <>
            <div className="bg-[#BDB4EA] p-2 flex-grow border rounded-lg">
                <h1 className=" font-medium text-lg">Today's activity</h1>
                {actArr.length === 0 ? <p>you haven't added anything</p> : actArr.map(function (item, index) {
                        return (
                            <Todoact id={item.id} act={item.act} index={index} actArr={actArr} setactArr={setactArr}></Todoact>
                        )
                    })}
            </div>
        </>
    )
}
export default Todolist