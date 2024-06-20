import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import { useState } from "react";
function App() {
  const [users, setusers] = useState(
    [
      {
        username: "san",
        password: "123"
      }
    ]
  )
  return(

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setusers={setusers}></Login>}></Route>
        <Route path='/signup' element={<Signup users={users} setusers={setusers}></Signup>}></Route>
        <Route path='/landing' element={<Landing></Landing>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
