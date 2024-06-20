import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"

function Signup(props) {

    const navigate = useNavigate()

    const users = props.users
    const setusers = props.setusers

    const [eusername,setEusername]=useState()
    const [epassword,setEpassword]=useState()

    const handleUinput=(evt)=>{
        setEusername(evt.target.value)
    }

    const handlePinput=(evt)=>{
        setEpassword(evt.target.value)
    }

    const handleSignup=()=>{
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    return (
        <div className=" bg-black p-10">
            <div className=" bg-white flex flex-col gap-3 border rounded-lg p-10 items-start">
                <h1>Hey Hi</h1>
                <p>Sign Up here :)</p>
                <input onChange={handleUinput} placeholder="username" className="p-3 border border-black rounded-md text-left"></input>
                <input onChange={handlePinput} placeholder="password" className="p-3 border border-black rounded-md text-left"></input>
                <input placeholder="confirm password" className="p-3 border border-black rounded-md text-left"></input>
                <button onClick={handleSignup} className=" bg-orange-300 p-3 border rounded-lg">Sign Up</button>
                <p>Already have an account ? <Link to={"/"} className=" underline">Login</Link></p>
            </div>
        </div>
    )
}
export default Signup
