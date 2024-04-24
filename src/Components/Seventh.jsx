import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Seventh = () => {
  return (
    <>
  <div class=" flex items-start flex-col justify-start">
    <div class="h-[700px] max-width-[380px] rounded-lg p-2  ">
      <div class="flex mb-5">
        <img
          src="https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-back-vector-icon-png-image_470452.jpg"
          class="w-6"
          alt=""
        />
        <h4 class="relative left-20 text-gray-800 font-bold">Workout Schedule</h4>
      </div>
      <div class="relative left-40"><ArrowBackIosIcon/>Feb 2024< ArrowForwardIosIcon/></div>
      <div class="flex items-center justify-between mb-4">
        <div class="flex-col">
          <div class="text-gray-500 mr-2">Sun</div>
          <div class="text-gray-700 font-bold text-lg ml-2">5</div>
        </div>
        <div class="flex-col bg-blue-200 rounded-lg">
          <div class="text-blue-800 px-2 py-1 mr-2">Mon</div>
          <div class="text-gray-700 font-bold text-xl mb-1 ml-5">6</div>
        </div>
        <div class="flex-col">
          <div class="text-gray-500 mr-2">Tue</div>
          <div class="text-gray-700 font-bold text-xl ml-2">7</div>
        </div>
        <div class="flex-col">
          <div class="text-gray-500">Wed</div>
          <div class="text-gray-700 font-bold text-xl ml-2">8</div>
        </div>
        <div>
          <div class="text-gray-500">Thu</div>
          <div class="text-gray-700 font-bold text-xl ml-2">9</div>
        </div>
      </div>

      <div class="flex flex-col">
        <div class="text-gray-800 mb-1">06:00 AM</div>
        <hr class="border border-gray-400" />

        <div class="text-gray-800 mt-3 mb-1">07:00 AM</div>
        <div class="flex justify-between">
          <hr class="border border-gray-400 w-40" />
          <div
            class="bg-purple-200 text-purple-800 rounded-lg h-15 px-2 py-1 mb-1 relative bottom-7"
          >
            Ab Workout, 7:30am
          </div>
        </div>

        <div class="relative bottom-7">
          <div class="text-gray-800 mt-3 mb-1">09:00 AM</div>
          <div class="text-gray-800 mt-3 mb-1">10:00 AM</div>
          <div class="flex justify-between">
            <hr class="border border-gray-400 w-40" />
            <div
              class="bg-purple-200 text-purple-800 rounded-lg h-15 flex px-2 py-1 mb-1 relative bottom-7"
            >
              Upperbody Workout, 9am
            </div>
          </div>
        </div>
        <div class="relative bottom-10">
          <div class="text-gray-800 mb-1">11:00 AM</div>
          <hr class="border border-gray-400" />
          <div class="text-gray-800 mt-3 mb-1">12:00 AM</div>
          <hr class="border border-gray-400" />
          <div class="text-gray-800 mt-3 mb-1">01:00 AM</div>
          <hr class="border border-gray-400" />
          <div class="text-gray-800 mt-3 mb-1">09:00 AM</div>
          <div class="flex justify-between">
            <hr class="border border-gray-400 w-40" />
            <div
              class="bg-gray-200 text-gray-700 rounded-lg h-15 flex px-2 py-1 mb-1 relative bottom-7 right-12"
            >
              Lowerbody Workout, 9am
            </div>
          </div>

          <div class="flex justify-between relative bottom-5">
            <div class="text-gray-800 mt-3 mb-1">03:00 AM</div>
            <div
              class="bg-purple-400 text-white rounded-full p-2 mb-1 flex justify-center items-center w-20 h-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          </div>

          <hr class="border border-gray-400 relative bottom-12" />
          <div class="text-gray-800 mt-3 relative bottom-10">04:00 AM</div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Seventh