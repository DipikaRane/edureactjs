import React from 'react';
import Cake from './Cake';
import axios from 'axios';
import {useEffect,useState} from 'react'

function CakeList(){
  var [cakes,setCakes]=useState()
    useEffect(()=>{
      axios({
        method:"get",
        url:"https://mycakestudio.herokuapp.com/cakes"
      }).then((response)=>{
        console.log("Ressponse from Cake Api",response)
        setCakes(response.data)
      },(error)=>{
        console.log("Error from Cake Api",error)
      })
    },[]) //blank array is used for calling useEffect only on mounting
    //removing blank array will cause infinite loop
    return(
      <div style={{marginLeft:'3%'}}>
            {cakes?.map((each)=>{
                return <Cake discount="Discount 10%"data={each}/>
            })}
        </div>
    )
}
export default CakeList


// function CakeList(){
//   var cake=[{
//       name:"Fruit Cake",
//       price:1000,
//       image:"cake1.jpeg"
//     },
//     {
//       name:"Vanila Cake",
//       price:900,
//       image:"cake2.jpeg"
//     },
//     {
//       name:"Vanila Cake",
//       price:900,
//       image:"cake2.jpeg"
//     },
//     {
//       name:"Vanila Cake",
//       price:900,
//       image:"cake2.jpeg"
//     }]
//   return(
//       <>
//       <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
//           {cake?.map((each)=>{
//               return <Cake data={each}/>
//           })}
//       </div>
//       </>
//   )
// }
// export default CakeList