import React from 'react';
import { useState,useEffect } from 'react'
import axios from 'axios';
const Form = () => {
    const [email,setemail]=useState("abdeshanmugam@gmail.com")
    const [password,setpassword]=useState("447564756sa")
    const [response,setresponse]=useState("")
    const [clear,setclear]=useState([])
    const add=async()=>{
       try {
        await axios.post("https://day-40-2.onrender.com/create",{email:email,password:password}).then((d)=>{
      
        if(d.status==200){

         setresponse("User mail id is created")
        }})
       } catch (error) {
        setresponse("User mail id is already taken")
       }
      
    }

    console.log(response);
    return (

        <div className='container d-flex flex-row justify-content-center'>
      <div className='row'>
  <div className="col-12">
    
  <label htmlFor="exampleInputEmail1" className="form-label mt-5">Email address</label>
  <input type="email" className="form-control mt-2 mb-2" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>{setemail(e.target.value)}}/>
  <div><span className='mt-5'>{response}</span></div>
  <label htmlFor="exampleInputPassword1" className="form-label mt-2">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setpassword(e.target.value)}}/>

  

  <button type="submit" className="btn btn-primary mt-3"onClick={add} >Submit</button>
</div>
        


      </div>
      
    

            
        </div>
    );
};

export default Form;