import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./Pages/Add";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import User from "./Pages/User";
import "./App.css";
import Error from "./Pages/Error";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useDispatch } from "react-redux";
import { current } from "./JS/Actions/user";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('token')){
      dispatch(current())
    }
  }, [dispatch]);
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <h2>mern_app</h2>
      <Footer />
    </div>
  );
}

export default App;
