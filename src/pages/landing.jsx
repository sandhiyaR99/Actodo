import Header from "../components/Header"
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom";
function Landing() {
    const data = useLocation()
  return (
    <div className=" bg-black p-16">
      <div className=" bg-white p-10 border rounded-md">
        {/* header */}
        <Header name={data.state.user}></Header>
        {/* card */}
        <div className=" flex flex-wrap justify-between gap-7">
          <Card bgcol={"#8272DA"} tit={"23"} subtit={"coimbatore"}></Card>
          <Card bgcol={"#FD6663"} tit={"Jan 10"} subtit={"14:22"}></Card>
          <Card bgcol={"#FCA201"} tit={"Built using"} subtit={"React"}></Card>
        </div>
        {/* totocontainer */}
        <Todocontainer></Todocontainer>
      </div>
    </div>
  );
}

export default Landing;
