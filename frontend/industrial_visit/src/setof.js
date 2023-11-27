import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css"
import React, { useState} from 'react';
import Nptel from "./nptel";
import Industry from "./industry";
//import axios from "axios"
//import {useNavigate } from 'react-router-dom'

 export const Setaf=()=>{

  //const navigate = useNavigate()
  
  const [setaf,setsetaf]=useState({
    "Subtype":""
 })
 const infoCollect=(eve)=>{
  const {name,value}=eve.target
  setsetaf((old)=>{
    if(name==="Subtype" && value==="Nptel"|| name==="Subtype" && value==="Industry"){
    return{
      ...old,
      [name]:eve.target.value
  }
}
  })
}
const Condition=()=>{
  if(setaf.Subtype==="Nptel"){
    return<Nptel/>
  }
  else if(setaf.Subtype==="Industry"){
    return<Industry/>
  }

}
console.log(setaf)
 
  return (
  <>
  <div  >
    <div className='overallcontent'>
      <div className='style'>
        <form className='block' > 
          <div className='font'>
            <div className='head'><h1>NPTEL</h1></div>           
              <div  className='content' >
            <table>
                <tr>
                  <td>
                  <label >Sub Type</label>
                  <select name="Subtype"  onChange={infoCollect}>
                  <option>Select the subtype</option>
                  <option value="Nptel">Nptel</option>
                  <option  value="Industry">Industry</option>
                  </select>
                  </td>
                </tr>
              </table>
              <Condition/>

            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  </>

  )
}
export default Setaf;