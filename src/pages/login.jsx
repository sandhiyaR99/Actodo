import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"

function Login(props) {

    const navigate = useNavigate()

    const [eusername,setEusername]=useState()
    const [epassword,setEpassword]=useState()
    const [ruser,setRuser]=useState(true)

   const users=props.users
   const setusers=props.setusers

    const checkuser=()=>{
        let founduser= false

        users.forEach(function(item){
            if(item.username === eusername && item.password === epassword){
                founduser=true
                navigate("/landing", {state:{user:eusername}})
            }
        })

        if(founduser===false){
            setRuser(false)
        }
    }

    const handleUinput=(evt)=>{
        setEusername(evt.target.value)
    }

    const handlePinput=(evt)=>{
        setEpassword(evt.target.value)
    }

    return (
        <div className=" bg-black p-10">
            <div className=" bg-white flex flex-col gap-3 border rounded-lg p-10 items-start">
                <h1>Hey Hi</h1>
                {ruser ? <p>I help you manage your activities:)</p> : <p className=" text-red-500"> Please Sign Up to help manage your activities</p>  }
                <input value={eusername} onChange={handleUinput} placeholder="username" className="p-3 border border-black rounded-md text-left"></input>
                <input value={epassword} onChange={handlePinput} placeholder="password" className="p-3 border border-black rounded-md text-left"></input>
                <button className=" bg-violet-400 p-3 border rounded-lg" onClick={checkuser}>Login</button>
                <p>Don't have an account ? <Link to={"/signup"} className=" underline">Sign Up</Link></p>
            </div>
        </div>
    )
}
export default Login
