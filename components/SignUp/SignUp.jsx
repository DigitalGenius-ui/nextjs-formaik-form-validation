"use client";

import React from "react";
import { useFormik } from "formik";

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
  const error = false;

  const registerUser = () => {
    alert("form submitted");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      rePassword: "",
    },
    onSubmit: registerUser,
  });

  const handleChange = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <div
      className="border border-gray-600 p-7 rounded-md bg-white/10
      w-[80%] mx-auto md:w-[25rem]">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col item-center gap-2">
        <h1 className="text-center text-xl uppercase pb-3">Sign Up</h1>
        {inputs.map((item, i) => (
          <div key={i}>
            <label className="text-sm">{item.label}</label>
            <input
              {...item}
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
