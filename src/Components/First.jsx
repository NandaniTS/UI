// First.jsx
import React, { useState } from "react";
import Second from "./Second";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const First = () => {
  let[skip,setSkip]=useState(false)

  return (
    <>
    {
      
      skip? <Second/> : <div
      id="first"
      className="h-[700px] max-w-[380px] border border-gray-100 "
    >
      
      <a href="#" onClick={()=>{setSkip(true)}} className="float-right m-1 underline text-purple-600 ">
        Skip
      </a>
      <div>
        <img
          src="src\assets\1.png"
          className="h-[250px] w-[250px] m-[70px]"
          alt=""
        />
        <h2 className="ml-2 text-2xl font-bold">Track Your Goal</h2>
        <p className="ml-2 mt-1 text-base text-gray-700">
          Don't worry if you have trouble determining your goals,we can help
          you determine your goals and track your goals
        </p>
      </div>

      <button onClick={()=>{setSkip(true)}} className="float-right h-12 w-12 bg-blue-300 m-10 mt-[60px] rounded-full">
      <ArrowForwardIosIcon/>
      </button>
    </div>
    }
   
      
    </>
  );
};

export default First;
