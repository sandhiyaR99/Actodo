function Card(props){
    return(
        <div style={{backgroundColor:props.bgcol}} className=" px-10 py-5 border rounded-md flex-grow my-6 text-center">
          <h1>{props.tit}</h1>
          <p>{props.subtit}</p>
        </div>
    )
}
export default Card