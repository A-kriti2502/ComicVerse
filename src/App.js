import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DashBoard from "./routes/DashBoard.jsx";
import PrivateRoute from "./components/PrivateRoute";
import HeroDetails from "./routes/HeroDetails";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";



function App() {

  const [ isLoggedIn , setIsLoggedIn ] = useState(false);

  return (
    <div className="overscroll-y-none">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <DashBoard/>
          </PrivateRoute>
        }></Route>
        <Route path="/:id" element={<HeroDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
