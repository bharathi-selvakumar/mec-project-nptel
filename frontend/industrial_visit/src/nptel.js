import React, { useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import "./main.css"
 export const Nptel=()=>{
  
  const [symposium,setsymposium]=useState({
    S_N0:0,
    Academic_year:0,
    Semester:"",
    Name_of_the_faculty:"",
    Year:"",
    Session:"",
    Course_name:"",
    Score_obtained:0,
    Certificate:""
    // Attachement:"",
    // Certificate_PDF:""
    })
 
console.log(symposium)
  const handlechange=(e)=>{
      setsymposium((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }
    
  const handleclick=async(e)=>{
  
     try{
      await axios.post('http://localhost:2005/insert',symposium)
     

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
                  <label >Academic year </label>
                  <select name="Academic_year"  onClick={handlechange} value={setsymposium.Academic_year}>
                  <option >SELECT THE Academic YEAR</option>
                  <option >2022-23</option>
                  <option >2023-24</option>
                  </select>
                  </td>
                </tr>
               
         
                <tr>  
                <td>
                  <label>Semester </label>
                  <select name="Semester" onClick={handlechange} value={setsymposium.Semester}>
                  <option>SELECT THE CURRENT SEMESTER</option>
                  <option >ODD</option>
                  <option >EVEN</option>
                  </select>
                  </td>
                </tr>
               

                <tr>
                <td>
                  <label>Name of the Faculty</label>
                  <input type='text' name='Name_of_the_faculty'  value={setsymposium.Name_of_the_faculty} placeholder=' Enter the Faculty Name'  onChange={handlechange}/></td>
                </tr>
               

                <tr>
                <td>
                  <label> Year</label>
                  <input type='text' name='Year' value={setsymposium.Year} placeholder='Enter the year'onChange={handlechange}  /></td>
                </tr>
               

                <tr>
                <td>
                  <label> Session</label>
                  <input type='text' name='Session'  value={setsymposium.Session} placeholder='Enter the session'onChange={handlechange}  />
                </td>
                </tr>
               
           
                <tr>
                <td>
                  <label>Course Name</label>
                  <input type='text' name='Course_name' value={setsymposium.Course_name} placeholder='Enter the course Name'onChange={handlechange}  /></td>
                </tr>
               
         
                <tr>
                <td>
                  <label>Score Obtained</label>
                  <input type='number' name='Score_obtained' value={setsymposium.Score_obtained} placeholder='Enter the Score'onChange={handlechange}  />
                  </td>
                </tr>
                 
         
                <tr>
                  <label>Certificate Type </label>
                  <select name="Certificate" onClick={handlechange} value={setsymposium.Certificate}>
                  <option>SELECT THE CERTIFICATE TYPE</option>
                  <option >Gold</option>
                  <option >Silver</option>
                  <option >Elite</option>
                  <option >Successfully Completed</option>
                  </select>
                </tr>
{/*                
                <tr>
                  <label>Attachment</label>
                  <input type='file' name='Attachement' value={setsymposium.Attachement} placeholder='Paste the Attachment 'onChange={ handlechange}  />
                </tr>
               
           
                <tr>
                  <label>Certificate_PDF</label>
                  <input type='file' name='Certificate_PDF' value={setsymposium.Certificate_PDF}  placeholder=' Paste Certificate-PDF'onChange={ handlechange}  />
                </tr>
                */}
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
export default Nptel;