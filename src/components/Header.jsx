function Header(props){
    return(
        <>
        <h1 className=" font-bold text-xl">Hello {props.name}</h1>
        <p>I help manage your activities :)</p>
        </>
    )
}
export default Header