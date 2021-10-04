import React, { useState } from "react";
import startup from "../assets/startup.png";
import * as Validator from "validatorjs";

const Form = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleInput = (e) => {
    setFullname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      fullname,
      email,
      password,
    };

    let rules = {
      fullname: "required",
      email: "required|email",
      password: "required|min:8",
    };
    let validation = new Validator(data, rules);
    validation.passes();
    setErrors([
      ...validation.errors.get("fullname"),
      ...validation.errors.get("email"),
      ...validation.errors.get("password"),
    ]);
    if (errors.length === 0) {
      alert(`
                    fullname : ${fullname}
                    email : ${email}
                    password : ${password}
                `);
    }
    console.log(errors);
  };

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
        <div className="text-center mt-12 text-gray-50 text-xl">
          <h1>
            Mari Bergabung <br />
            Untuk Mendapatkan lebih banyak keuntungan
          </h1>
        </div>
        <div className="flex justify-center">
          <img src={startup} alt="startup" className="w-96" />
        </div>
      </div>
      <div className="w-6/12 h-full flex flex-col justify-center bg-gray-700 rounded-md">
        <ul className="mx-16 text-red-600">
          {errors.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="form flex flex-col gap-5 mx-16 text-white ">
            <div className="flex flex-col">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
                className="bg-transparent border-b-2 focus:outline-none"
                onChange={handleInput}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="bg-transparent border-b-2 focus:outline-none"
                onChange={handleEmail}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                onChange={handlePassword}
                className="bg-transparent border-b-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-20 text-center mx-16 mt-10 cursor-pointer">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
