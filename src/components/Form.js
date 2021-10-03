import React from "react";
import startup from "../assets/startup.png";

const Form = () => {
  return (
    <div className="w-11/12 h-5/6 flex justify-between items-center shadow-2xl ">
      <div className="bg-blue-300 flex flex-col w-6/12 h-full shadow-inner  rounded-md">
        <div className="p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="text-center mt-12 text-white text-xl">
          <h1>
            Mari Bergabung <br />
            Untuk Mendapatkan lebih banyak keuntungan
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={startup} alt="startup" className="w-96" />
        </div>
      </div>
      <div className="w-6/12 h-full bg-gray-700 rounded-md">
        <div className="button flex justify-end m-5 cursor-pointer">
          <button className="px-3 py-1 border-2 border-gray-300 text-gray-300 rounded-md shadow-md hover:bg-blue-300">
            Login
          </button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Form;
