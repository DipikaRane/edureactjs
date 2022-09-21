import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from './Carousel';
//import { useEffect } from 'react';
function Login(props){
    // useEffect(()=>{
    //     alert("Created")
    // })
    // alert("Still in progress")
    function login(){
        if(user.email==="deepika@gmail.com"&&user.password==="deepika"){
        props.Userlogin()
        console.log('ok')
        }
    }
    var user={}    
     function getEmail(e){
        user.email=e.target.value
        console.log(user.email)
    }
    function getPassword(e){
        user.password=e.target.value
        console.log(user.password)
    }
    return(
        <>
            <div className="row" style={{marginBottom:'3px'}}>
                <div className="col-lg-4 col-md-4">
                    <div className="form-group">
                        <label>Email </label>
                        <input type="email" className="form-control" onChange={getEmail}/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="form-group">
                        <label>Password </label>
                        <input type="password"className="form-control" onChange={getPassword}/>
                    </div>
                </div>           
                <div className="col-lg-1">
                    <Link to="/"><button className="btn btn-outline-success" onClick={login} style={{marginTop:'20px'}}>Login</button></Link>
                </div>
                <div className="col-lg-2" style={{marginTop: '2%'}}>
                    <Link to="/sign-up"><label>New User? Sign Up Here</label></Link>
                </div>
                
            </div>
            <Carousel/>
            </>
    )
}
export default Login