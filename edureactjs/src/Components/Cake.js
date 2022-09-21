import React from 'react';
import './cake.css'
function Cake(props){
    return(
        <div className="cake">
        <div className="card">
            <div className="card-image">
                <img src={props.data.image} alt="cake"/>
            </div>
            <div className="card-body">
                <h4>{props.data.cake_name}</h4>
                <h5>{props.data.layer} Layer Cake</h5>
                <h5>Rs.{props.data.cost}/-</h5>
                <h6>{props.discount}</h6>
            </div>
        </div>
        </div>
    )
}
export default Cake