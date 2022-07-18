import React from 'react';
import Cake from './Cake';
import './cake.css'

function CakeList(){
    var cake=[{
        name:"Fruit Cake",
        price:1000,
        image:"cake1.jpeg"
      },
      {
        name:"Vanila Cake",
        price:900,
        image:"cake2.jpeg"
      }]
    return(
        <>
        <div>
            {cake?.map((each)=>{
                return <Cake data={each}/>
            })}
        </div>
        </>
    )
}
export default CakeList