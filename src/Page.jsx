import React from 'react';
import {Link} from "react-router-dom"
import './App.css'
const Page = () => {
    return (
        <div>
            <div className='btnz'>
            <button className='btnz1'><Link to={"/"}>home</Link></button>
            <button className='btnz1'><Link to={"/create"}>login</Link></button>
            </div>
      </div>
           
    );
};

export default Page;