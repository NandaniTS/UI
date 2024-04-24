import React, { useState } from 'react';
import Sixth from './Sixth';

const Fifth = () => {
  let[goals,setGoals]=useState(false)
  return (
    <>
    {
      goals?<Sixth/>:(<div id="goals" className="pt-2 h-[700px] max-w-[380px] border border-gray-100 flex flex-col items-center">
      <h2 className="text-2xl font-bold mt-2">What are your goals?</h2>
      <div id="check" className="mt-2"> 
        <div className="h-12 w-[280px] p-2 my-4 text-sm text-gray-900 bg-gray-300 border border-gray-300 rounded-lg flex items-center justify-between">Weight Loss 
          <input type="checkbox" className="border border-blue-500" /> 
        </div>
        <div className="h-12 w-[280px] p-2 my-4 text-sm text-gray-900 bg-gray-300 border border-gray-300 rounded-lg flex items-center justify-between">Muscle Gain 
          <input type="checkbox" className="border border-blue-500" />
        </div>
        <div className="h-12 w-[280px] p-2 my-4 text-sm text-gray-900 bg-gray-300 border border-gray-300 rounded-lg flex items-center justify-between">Flexibility and Mobility 
          <input type="checkbox" className="border border-blue-500" />
        </div>
        <div className="h-12 w-[280px] p-2 my-4 text-sm text-gray-900 bg-gray-300 border border-gray-300 rounded-lg flex items-center justify-between">General Fitness 
          <input type="checkbox" className="border border-blue-500" />
        </div>
        <div className="h-12 w-[280px] p-2 my-4 text-sm text-gray-900 bg-gray-300 border border-gray-300 rounded-lg flex items-center justify-between">Event - specific 
          <input type="checkbox" className="border border-blue-500" />
        </div>
        <div className="h-12 w-[280px] p-2 my-4 text-sm text-gray-900 bg-gray-300 border border-gray-300 rounded-lg flex items-center justify-between">Mindfulness and Mental Health 
          <input type="checkbox" className="border border-blue-500" />
        </div>
      </div>

      <div>
        <button onClick={()=>setGoals(true)} className="h-12 w-[280px] mt-[100px] bg-blue-500 text-white rounded-lg text-base">Confirm</button>
      </div> 
    </div>)
    }
    
    
    
    </>
  );
}

export default Fifth;
