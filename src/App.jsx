import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';
import React from 'react';
import {BrowserRouter,Form,Route,Routes} from "react-router-dom"
import Page from './Page';
import Forms from './Form';
import Home from './Home';
const App = () => {
  
  const [alldata , setalldata]=useState("")
  //  useEffect(()=>{
  //  function datainfo(){
  //    const data=axios.get("http://localhost:3020/")
  //   data.then((d)=>{
  //        console.log(d.data);
  //     })
  //   }
  //    datainfo()
  //  },[])

  


  return (
    <div>
     <BrowserRouter>
     <Page/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Forms/>}/>
      </Routes>

       </BrowserRouter>
         
    </div>
  );
};

export default App;