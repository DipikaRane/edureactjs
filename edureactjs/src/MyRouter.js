//import React from 'react';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import Cakelist from './Components/Cakelist';
import Carousel from './Components/Carousel';
import Signup from './Components/Signup';
import Login from './Components/Login';
import {useState} from 'react';
import CakeDetails from './Components/CakeDetails';
import Search from './Components/Search'

function PageNotFound(){
    return(
        <>
        <h1>Page Not Found</h1>
        <Link to="/"><h3>Go to Home Page</h3></Link>
        </>
    )
}
export default function MyRouter(){ 
    var [isloggedin,setIsloggedin]=useState(false)
    // var [isloggedout,setIsloggedout]=useState(true)
    function myLogin(){
        setIsloggedin(true)
    }
    return(
        <BrowserRouter>
        <Navbar isloggedin={isloggedin} />
        {/* <Login Userlogin={myLogin}/> */}
            <Routes>
                <Route path="/" element={<Carousel/>}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/login" element={<Login Userlogin={myLogin} />}/>
                <Route path="/cake" element={<Cakelist/>}/>
                <Route path="/details/:cakeid" element={<CakeDetails/>}/>
                <Route path="/sign-up" element={<Signup/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
