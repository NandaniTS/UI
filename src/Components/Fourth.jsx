import React, { useState } from "react";
import Fifth from "./Fifth";

const Fourth = () => {
  let [login,setLogin]=useState(false)
  return (
    <>
    {
     login ?<Fifth/>: (
        <div
      id="welcomepage"
      className="p-4 h-[700px] max-w-[380px] border border-gray-100 flex flex-col justify-between"
    >
      <div>
        <h2 className="text-2xl mb-4 font-bold">Welcome Back</h2>
        <input
          type="text"
          className="h-12 px-10 w-[350px] rounded-lg bg-gray-300 border-none"
          placeholder="Email"
        />
        <br />
        <br />
        <input
          type="password"
          className="h-12 px-10 w-[350px] rounded-lg bg-gray-300 border-none"
          placeholder="Password"
        />
        <br />
        <br />
        <a href="" className="text-gray-500 text-sm underline">
          Forgot your password?
        </a>
      </div>

      <div>
        <button className="signin h-12 w-[99%] mx-auto bg-blue-500 text-white rounded-lg my-0 mx-2 mt-2" onClick={()=>setLogin(true)}>
          Sign In
        </button>
        <br />
        <br />
        <p>--------------------------Or-------------------------</p>
        <div className="flex justify-center">
          <button className="social h-10 w-10 rounded-lg mt-2  mb-2 border border-black-400">
            <img
              className="h-10 w-10"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt=""
            />
          </button>
          <button className="social h-10 w-10 rounded-lg mt-2 ml-5 mb-2 border border-black-400">
            <img
              className="h-10 w-10"
              src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
              alt=""
            />
          </button>
        </div>
        <br />
        <a href="">
          Don't have an account yet?
          <span className="text-blue-600 underline">Create an account</span>
        </a>
      </div>
    </div>
      )

    }
    
    
    </>
  );
};

export default Fourth;
