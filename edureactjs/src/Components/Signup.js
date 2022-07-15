import {useState} from 'react';
function Signup(){
    var email 
    function getEmail(e){
        email=e.target.value
    }
    var [error,setError]=useState("")
    function signup(){
        // if(!email){
        //     setError("Email required")
        // }
        if(!email){
            error="Email required"
            setError(error)
        }
        else{
            setError("")
        }
    }
    return(
        <>
        <input onChange={getEmail} className="form-control"/>
        <div style={{color:'red'}}>
            {error}
        </div>
        <button onClick={signup} className="btn btn-primary">Signup</button>
        </>
    )
}
export default Signup