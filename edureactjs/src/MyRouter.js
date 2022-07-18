//import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import Cakelist from './Components/Cakelist';
import Carousel from './Components/Carousel';
//import Signup from './Components/Signup';
import Login from './Components/Login';
import {useState} from 'react'

export default function MyRouter(){ 
    var [isloggedin,setIsloggedin]=useState(false)
    function myLogin(){
        setIsloggedin(true)
    }
    return(
        <BrowserRouter>
        <Navbar isloggedin={isloggedin}/>
        {/* <Signup /> */}
        <Login Userlogin={myLogin}/>
        {/* <Home/> */}
            <Routes>
                <Route path="/" element={<Carousel/>}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/cake" element={<Cakelist/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}
