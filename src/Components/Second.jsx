// Second.jsx
import React, { useState } from "react";
import Third from "./Third";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Second = ({ onSkip }) => {
  let[skip,setSkip]=useState(false)
  return (
    <>
      {
        skip? <Third/> : (<div
          id="second"
          className="h-[700px] max-w-[380px] border border-gray-100"
        >
          <a
            href="#"
            onClick={()=>setSkip(true)}
            className="float-right m-1 underline text-purple-600"
          >
            Skip
          </a>
          <div>
            <img
              className="h-[250px] w-[310px] m-[50px] mx-10"
              src="src\assets\2.png"
              alt=""
            />
            <h2 className="ml-2 text-2xl">Get Burn</h2>
            <p className="ml-2 mt-1 text-base text-gray-700">
              Let's keep burning to achieve your goals, it hurts only temporarily,
              if you give up now you will be in pain forever
            </p>
          </div>
          <button onClick={()=>setSkip(true)} className="float-right h-12 w-12 bg-blue-300 m-10 mt-[60px] rounded-full">
          <ArrowForwardIosIcon/>
          </button>
        </div>)
      }
    </>
  );
};

export default Second;
