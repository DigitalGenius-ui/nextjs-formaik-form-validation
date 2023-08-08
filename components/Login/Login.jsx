"use client";

import React from "react";

const Login = ({ setLog }) => {
  const inputs = [
    {
      label: "Username",
      type: "text",
      placeholder: "Username...",
      name: "username",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Email...",
      name: "username",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Password...",
      name: "username",
    },
  ];

  const error = false;
  return (
    <div
      className="border border-gray-600 p-7 rounded-md bg-white/10
      w-[80%] mx-auto md:w-[25rem]">
      <form className="flex flex-col item-center gap-2">
        <h1 className="text-center text-xl uppercase pb-3">Sign In</h1>
        {inputs.map((input, i) => (
          <div key={i}>
            <label className="text-sm">{input.label}</label>
            <input
              {...input}
              className="w-full p-3 outline-none bg-transparent text-sm
            border border-gray-600 rounded-md focus:border-gray-300"
            />
            {error && (
              <span className="text-xs text-red-400">error message</span>
            )}
          </div>
        ))}
        <button className="bg-white/20 p-3 mt-2 rounded-md hover:bg-white/40">
          Submit
        </button>
      </form>
      <p className="text-center pt-2 text-sm flex items-center justify-center gap-1">
        If you don't have an account
        <span
          onClick={() => setLog(false)}
          className="hover:opacity-40 cursor-pointer text-orange-300">
          Sign Up Here
        </span>
      </p>
    </div>
  );
};

export default Login;
