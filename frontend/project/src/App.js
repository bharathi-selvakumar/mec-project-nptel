import React, { useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import "./index.css"

//import {useNavigate } from 'react-router-dom'

 export const Add=()=>{

  //const navigate = useNavigate()
  
  const [symposium,setsymposium]=useState({

    Academic_year:0,
    Semester:"",
    Name_of_the_faculty:"",
    Year:"",
    Session:"",
    Course_name:"",
    Score_obtained:0,
    Certificat:"",
    // attachement:"",
    // pdf:""
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
      await axios.post('http://localhost:2020/insert',symposium)
     

    }
  
    catch(err){
      console.log(err)
    } 
  }
  return (
  <>
  <div  >
    <div className='overallcontent'>
      <div className='style'>
        <form className='block' >

          
          <div className='font'>
          
            <div className='head'><h1>EVENT PROPOSAL</h1></div>
            
             
              <div  className='content' >
            <table>

                <tr>
                  
                  <label >Academic year </label>
                  <select name="Academic_year"  onClick={handlechange}>
                  <option >SELECT THE Academic YEAR</option>
                  <option >2022-23</option>
                  <option >2023-24</option>
                  </select>
                </tr>
               
         
                <tr>  
                  <label>Semester </label>
                  <select name="Semester" onClick={handlechange}>
                  <option>SELECT THE CURRENT SEMESTER</option>
                  <option >ODD</option>
                  <option >EVEN</option>
                  </select>
                </tr>
               

                <tr>
                <td>
                  <label>Name of the Faculty</label>
                  <input type='text' name='Name_of_the_faculty' placeholder=' Enter the Faculty Name'  onChange={handlechange}/></td>
                </tr>
               

                <tr>
                <td>
                  <label> Year</label>
                  <input type='text' name='Year' placeholder='Enter the year'onChange={handlechange}  /></td>
                </tr>
               

                <tr>
                <td>
                  <label> Session</label>
                  <input type='text' name='Session' placeholder='Enter the session'onChange={handlechange}  />
                </td>
                </tr>
               
           
                <tr>
                <td>
                  <label>Course Name</label>
                  <input type='text' name='Course_name' placeholder='Enter the course Name'onChange={handlechange}  /></td>
                </tr>
               
         
                <tr>
                <td>
                  <label>Score Obtained</label>
                  <input type='number' name='Score_obtained' placeholder='Enter the Score'onChange={handlechange}  />
                  </td>
                </tr>
                 
         
                <tr>
                  <label>Certificate Type </label>
                  <select name="Certificat" onClick={handlechange}>
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
                  <input type='file' name='attachement' placeholder='Paste the Attachment 'onChange={handlechange}  />
                </tr>
               
           
                <tr>
                  <label>Certificate-PDF</label>
                  <input type='file' name='pdf' placeholder=' Paste Certificate-PDF'onChange={handlechange}  />
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
    </div>
  </>

  )
}
export default Add;