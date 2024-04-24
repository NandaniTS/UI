import React, { useState } from "react";
import Fourth from "./Fourth";

const Third = ({onCreateAccount}) => {
  let[create,setCreate]=useState(false)
  return (
    <>
   {
    create? <Fourth/> :( <div
      id="create"
      className="h-[700px] max-w-[380px] border border-gray-100 p-2 flex flex-col items-center justify-between"
    >
      <div>
        <h1 className="text-2xl mb-4 font-bold">Create an Account</h1>
        <form>
          <input
            type="text"
            placeholder="First Name"
            required
            className="h-12 px-4 w-[350px] rounded-lg bg-gray-300 border-none mt-1 mb-2"
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="h-12 px-4 w-[350px] rounded-lg bg-gray-300 border-none mt-1 mb-2"
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            required
            className="h-12 px-4 w-[350px] rounded-lg bg-gray-300 border-none mt-1 mb-2"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            required
            className="h-12 px-4 w-[350px] rounded-lg bg-gray-300 border-none mt-1 mb-2"
          />
          <br />
        </form>
        <label htmlFor="policy" className="text-sm">
          <input id="policy" type="checkbox" required />{" "}
          <span>
            By proceeding, I agree to all{" "}
            <a href="#terms" className="underline text-blue-600">
              T&C
            </a>{" "}
            and{" "}
            <a href="#privacy" className="underline text-blue-600">
              Privacy Policy
            </a>
          </span>
        </label>
      </div>

      <div>
        <button onClick={()=>setCreate(true)} className="signin h-12 w-full bg-blue-500 text-white rounded-lg my-2">
          Create an Account
        </button>
        <p className="text-center my-2">
          
        </p>
        <div className="flex justify-center">
          <button
            className="social h-10 w-10 rounded-lg mt-2 mb-2 border border-black-400"
            aria-label="Google"
          >
            <img
              className="h-10 w-10"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt="Google"
            />
          </button>
          <button 
            className="social h-10 w-10 rounded-lg mt-2 ml-5 mb-2 border border-black-400"
            aria-label="Facebook"
          >
            <img
              className="h-10 w-10"
              src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
              alt="Facebook"
            />
          </button>
        </div>
        <p className="text-center mt-2">
          Already have an account?{" "}
          <a href="#login" className="text-blue-600 underline" onClick={()=>setCreate(true)}>
            Login
          </a>
        </p>
      </div>
    </div>)
   }
   </>
  );
};

export default Third;
