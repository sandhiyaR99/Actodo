import { useState } from "react"
import Addtodoform from "./Addtotoform"
import Todolist from "./Todolist"
function Todocontainer() {
    const [actArr, setactArr] = useState([
        {
            id: 1,
            act: "Go for a walk"
        }
    ])
   
    return (
        <>
            <div className="flex gap-5 flex-wrap">
                <Addtodoform actArr={actArr} setactArr={setactArr}></Addtodoform>
                <Todolist actArr={actArr} setactArr={setactArr}></Todolist>
            </div>
        </>
    )
}
export default Todocontainer