import React from "react";
import Seventh from "./Seventh";


const Sixth = () => {
  return (
    <>
      <div className="flex items-center justify-around flex-wrap">
      <div class=" ">
        <div class= " max-w-[380px] h-[750px]  bg-white shadow-md rounded-lg p-4">
          <div class="flex space-around">
            <button class="w-12 h-5">
              <img
                src="https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-back-vector-icon-png-image_470452.jpg"
                class="w-5"
                alt=""
              />
            </button>
            <h1 class="text-xl font-bold mb-4 ml-20">Workout Tracker</h1>
          </div>
          <div>
            <img src="src\assets\graph.jpeg" class="mb-5" alt="" />
          </div>
          <div class="flex items-center justify-between mb-4"></div>

          <div class="bg-blue-100 text-purple-500 rounded-md p-2 mb-4 flex ">
            <img
              src="https://cdn-icons-png.freepik.com/512/9213/9213148.png"
              class="w-5 h-5 mt-3 ml"
              alt=""
            />
            <p class="ml-5">
              You've burned fewer calories than yesterday. Time to get moving!
            </p>
          </div>

          <div class="flex justify-between">
            <h2 class="text-lg font-bold mb-2">Upcoming Workout</h2>
            <h3 class="text-gray-500">See more</h3>
          </div>

          <div class="bg-gray-100 flex items-center justify-between rounded-md p-5">
            <div class="flex items-center mb-2">
              <img
                src="src\assets\workout1.jpeg"
                class="rounded-full w-12 h-12 mt-1 mr-10"
                alt=""
              />
            </div>
            <div class="relative right-10">
              <span class="font-bold">Full Body Workout</span>

              <p class="text-gray-500">Today 3pm</p>
            </div>

            <label
              for="upperBodyToggle"
              class="flex items-center cursor-pointer"
            >
              <div class="relative">
                <input type="checkbox" id="upperBodyToggle" class="hidden" />

                <div class="toggle__line w-10 h-6 bg-blue-400 rounded-full shadow-inner bg-blue-300"></div>

                <div
                  class="toggle__dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0.5 top-1
              "
                ></div>
              </div>
            </label>
          </div>

          <div class="bg-gray-200 flex items-center justify-between rounded-md p-5">
            <div class="flex items-center mb-2">
              <img
                src="src\assets\workout2.jpeg"
                class="rounded-full w-12 mt-1 mr-10"
                alt=""
              />
            </div>
            <div class="relative right-10">
              <span class="font-bold">Upper Body Workout</span>

              <p class="text-gray-500">4 Feb, 3:30 pm</p>
            </div>

            <label
              for="upperBodyToggle"
              class="flex items-center cursor-pointer"
            >
              <div class="relative">
                <input type="checkbox" id="upperBodyToggle" class="hidden" />

                <div class="toggle__line w-10 h-6 bg-blue-400 rounded-full shadow-inner bg-blue-300"></div>

                <div class="toggle__dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0.5 top-1"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <Seventh/>
      </div>
    </>
  );
};
export default Sixth;
