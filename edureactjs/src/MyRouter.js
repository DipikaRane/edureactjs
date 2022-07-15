//import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import Cake from './Components/Cake';

const MyRouter=()=>{ 
    return(
        <BrowserRouter>
        <Navbar/>
        {/* <Home/> */}
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cake" element={<Cake/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default MyRouter