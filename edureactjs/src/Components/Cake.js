import React from 'react';
import './cake.css'
function Cake(props){
    // var cake=[{
    //     name:"Fruit Cake",
    //     price:1000,
    //     image:"cake1.jpeg"
    //   }]
    return(
        <>
        {/* <div style={{border:'1px solid black',width:'300px'}}>
            <img src={props.data.image} style={{height:'200px',margin:'2%'}}alt=""/>
            <p>{props.data.name}</p>
            <p>{props.data.price}</p>
        </div> */}
        <div className="card">
            <div className="card-image">
                <img src="cake1.jpeg" alt="cake1"/>
            </div>
            <div className="card-body">
                <h3>Fruit Cake</h3>
                <h4>Rs.1000/-</h4>
            </div>
        </div>
        </>
    )
}
export default Cake