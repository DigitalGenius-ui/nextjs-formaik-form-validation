"use client";

import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import Input from "../utils/Input";

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
      name: "email",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Password...",
      name: "password",
    },
  ];

  const error = false;

  const loginUser = () => {
    alert(formik.values.username);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: loginUser,
    validationSchema: yup.object().shape({
      username: yup.string().required().min(4).max(10),
      email: yup.string().email().required(),
      password: yup
        .string()
        .required()
        .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"),
    }),
  });

  const handleChange = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <div
      className="border border-gray-600 p-5 rounded-md bg-white/10
      w-[80%] mx-auto md:w-[25rem]">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col item-center gap-2">
        <h1 className="text-center text-xl uppercase pb-3">Sign In</h1>
        {inputs.map((item, i) => (
          <Input
            key={i}
            item={item}
            formik={formik}
            handleChange={handleChange}
          />
        ))}
        <button className="bg-white/20 p-3 mt-2 rounded-md hover:bg-white/40 text-xs">
          Submit
        </button>
      </form>
      <p className="text-center pt-2 text-xs flex items-center justify-center gap-1">
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
