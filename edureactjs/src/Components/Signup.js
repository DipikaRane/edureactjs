import axios from 'axios';
//import {useState} from 'react';
import './cake.css'
import Carousel from './Carousel';

//signup api = "https://myfirstzomatologin.herokuapp.com/api/auth/Register"
function Signup(props){
    var user={}
    var email
    var myname
    var password
    // var phone
    function getEmail(e){
        email=e.target.value
        console.log(email)
    }
    function getName(e){
        myname=e.target.value
        console.log(myname)
    }
    function getPassword(e){        
        password=e.target.value       
        console.log(password)
    }
    // function getPhone(e){ 
    //     phone=e.target.value
    //     console.log(phone)
    // }
    function signup(){
        try{
        axios({
            method:"post",
            data:user, //{name,email,password,phone}
            url:"https://apifromashu.herokuapp.com/api/register"
        }).then((response)=>{
            console.log("User registered successfully",response)
        },(error)=>{
            console.log("Error from api",error)
        })
    }catch(error){
        console.log("Api not fetched",error)
    }
    }
    return(
        <>
        <Carousel/>
        <div id="signup-container">
            <div className="field-container">
                <h3>Register Here</h3>
            <div className="row">
            <div className="col-lg-5">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" onChange={getName}className="form-control" placeholder="Your Name"/>
                </div>
            </div>
                {/* <div className="col-lg-5">
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input className="form-control" onChange={getPhone} />
                    </div>
                </div> */}
            </div>
            <div className="row">
            <div className="col-lg-5">
                <div className="form-group">                   
                    <label>Email address</label>
                    <input onChange={getEmail} className="form-control" placeholder="Email address"/>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={getPassword}className="form-control" placeholder="Enter Password"/>
                </div>
            </div>
            </div>
            <button onClick={signup} className="btn btn-danger">Signup</button>
            </div>
            <div className="imgcard">
                <div className="card" style={{height:'200px',width:'95%'}}>
                    <img src="https://i.ibb.co/gJnswjs/cupcake4.jpg" alt="cupcake"/>
                </div>
            </div>
        </div>
        </>
        
    )
}
export default Signup