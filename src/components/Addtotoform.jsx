import { useState } from "react"
function Addtodoform(props) {
    const actArr= props.actArr
    const setactArr=props.setactArr

    const [ipact,setipact]=useState("")
    
    const ipaddact=(evt)=>{
        setipact(evt.target.value)
    }

    const addact=()=>{
        setactArr([...actArr,{id:actArr.length+1,act:ipact}])
        setipact("")
    }

    return (
        <>
            <div className="flex flex-col gap-3">
                <h1 className=" text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input type="text" placeholder="Next activity" className=" p-1 border border-black" onChange={ipaddact} value={ipact}></input>
                    <button className=" bg-black text-white p-1 border border-black" onClick={addact}>ADD</button>
                </div>
            </div>
        </>
    )
}
export default Addtodoform