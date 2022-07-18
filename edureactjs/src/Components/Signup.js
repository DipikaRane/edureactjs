import {useState} from 'react';
import './cake.css'
function Signup(props){
    var email
    function getEmail(e){
        email=e.target.value
        // console.log(email)
    }
    var [error,setError]=useState("")
    function signup(){
        // if(!email){
        //     setError("Email required")
        // }
        if(!email){
            error="Email required :"
            setError(error)
        }
        else{
            setError("")
        }
    }
    return(
        <>
        <div id="signup-container">
        <div className="eid">
            {error}
        </div>
        <input onChange={getEmail} className="form-control" placeholder="Email address"/>
        <button onClick={signup} className="btn btn-danger">Signup</button>
        
        {/* {isloggedIn && <button className="btn btn-success">Sign Out</button>} */}
        </div>
        </>
        
    )
}
export default Signup