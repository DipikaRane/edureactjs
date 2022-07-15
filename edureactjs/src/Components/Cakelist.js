import React from 'react';
import Cake from './Cake';

function CakeList(){
    var cake={
        name:"Fruit Cake",
        price:1000,
        image:"cake1.jpeg"
      }
    return(
        <>
        <div className="container-fluid">
            <img src="https://i.ibb.co/gD4t3k4/cake-landing-page-banner-desktop.jpg" alt="cake1" style={{width:'100%',height:'400px'}}/>
        </div>
        <div className="row">
            {cake?.map((each)=>{
                return <Cake data={each}/>
            })}
        </div>
        </>
    )
}
export default CakeList