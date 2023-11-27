import React, { useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import "./main.css"


 export const Industry=()=>{
  
  const [symposium,setsymposium]=useState({
    
    "Faculty_name":"",
    "Date_of_visit":"",	
    "Name_of_industry":"",	
    "Location_of_industry":"",	
    "Website_link_of_industry":"",	
    "Name_of_insdustry_instution_person_interacted":"",	
    "Designation_of_industry_instution_person_interacted":"",	
    "Purpose_of_the_visite":""	,
    "Outcome_of_the_activity":""
   
    })
  
console.log(symposium)
  const handlechange=(e)=>{
      setsymposium((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }
  const handleclick=async(e)=>{
    e.preventDefault()
     try{
      await axios.post(`http://localhost:2030/insert`,symposium)
    }
    catch(err){
      console.log(err)
    } 
  }
  return (
  <>
    <div className='overallcontent'>
      <div className='style'>
        <form className='block' >
          <div className='font'>
            <div className='head'><h1>EVENT PROPOSAL</h1></div>
              <div  className='ej' >
                <table>
                <tr>
                  <td>
                  <label>Name Of the Faculty </label>
                  <input type='text' name='Faculty_name' value={setsymposium.Faculty_name} placeholder='Enter the Facultay_Name'onChange={handlechange}  /></td>
                </tr>
                
         
                <tr>  
                  <td>
                <label>Date Of Visit </label>
                <input type='text' name='Date_of_visit'  value={setsymposium.Date_of_visit} placeholder='Enter the Date of visiting'onChange={handlechange}  /></td>
                </tr>
                
               
                <tr >
                <td>
                  <label>Name Of Industry/Insitution Visited</label>
                  <input type='text' name='Name_of_industry'  value={setsymposium.Name_of_industry} placeholder='Enter the Industry_Name'onChange={handlechange}  /></td>
                </tr>
                

                <tr>
                <td>
                  <label>Location of Industry/Insitution Visited</label>
                  <input type='text' name='Location_of_industry'value={setsymposium.Location_of_industry} placeholder='Enter the Location of Industry'onChange={handlechange}  /></td>
                </tr>
                
           
                <tr>
                <td>
                  <label>Website link of Industry/Insitution Visited</label>
                  <input type='text' name='Website_link_of_industry'  value={setsymposium.Website_link_of_industry} placeholder='Enter the website link'onChange={handlechange}  /></td>
                </tr>
                
         
                <tr>
                <td>
                  <label>Name Of Industry/Insitution person Interacted</label>
                  <input type='type' name='Name_of_insdustry_instution_person_interacted' value={setsymposium.Name_of_insdustry_instution_person_interacted} placeholder='Enter the Score'onChange={handlechange}  /></td>
                </tr>
                  
         
                <tr>
                <td>
                  <label>Designation Of Industry/Insitution person Interacted</label>
                  <input type='type' name='Designation_of_industry_instution_person_interacted' value={setsymposium.Designation_of_industry_instution_person_interacted} placeholder='Enter the Score'onChange={handlechange}  /></td>
                </tr>
                
           
                <tr>
                <td>
                  <label>Purpose Of the Visite</label>
                  <input type='type' name='Purpose_of_the_visite' value={setsymposium.Purpose_of_the_visite} placeholder='What purpose of visite the Industry'onChange={handlechange}  /></td>
                </tr>
                
           
                <tr>
                <td>
                  <label>Outcome Of the  Activity </label>
                  <input type='text' name='Outcome_of_the_activity' value={setsymposium.Outcome_of_the_activity} placeholder=' Enter the Outecome the activity'onChange={handlechange}  /></td>
                </tr>
                
                

                </table>
              </div>
         
                <button  className="submit"type='submit' name='submit' onClick={handleclick}>SUBMIT </button>
                <button  className='clear' type='reset' name='clear'>CLEAR</button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}
export default Industry;