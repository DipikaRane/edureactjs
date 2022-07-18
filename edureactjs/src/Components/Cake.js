import React from 'react';
import './cake.css'
function Cake(props){
    return(
        <div className="card">
            <div className="card-image">
                <img src={props.data.image} alt="cake1"/>
            </div>
            <div className="card-body">
                <h3>{props.data.name}</h3>
                <h4>Rs.{props.data.price}/-</h4>
            </div>
        </div>
    )
}
export default Cake