"use client";

import React from "react";
import Input from "../utils/Input";

const SignUp = ({ setLog }) => {
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
      name: "email",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Password...",
      name: "password",
    },
    {
      label: "re-Password",
      type: "password",
      placeholder: "re-Password...",
      name: "rePassword",
    },
  ];

  return (
    <div
      className="border border-gray-600 p-5 rounded-md bg-white/10
      w-[80%] mx-auto md:w-[25rem]">
      <form className="flex flex-col item-center gap-2">
        <h1 className="text-center text-xl uppercase pb-3">Sign Up</h1>
        {inputs.map((item, i) => (
          <Input item={item} key={i} />
        ))}
        <button className="bg-white/20 p-3 mt-2 rounded-md hover:bg-white/40 text-xs">
          Submit
        </button>
      </form>
      <p className="text-center pt-2 text-xs flex items-center justify-center gap-1">
        If you have an account
        <span
          onClick={() => setLog(true)}
          className="hover:opacity-40 cursor-pointer text-orange-300">
          Sign In Here
        </span>
      </p>
    </div>
  );
};

export default SignUp;
