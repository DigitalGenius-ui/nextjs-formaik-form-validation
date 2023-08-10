"use client";

import React from "react";
import Input from "../utils/Input";
import { useFormik } from "formik";
import * as yup from "yup";

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

  const registerUser = () => {
    alert(formik.values.password);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      rePassword: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      username: yup.string().required().min(4).max(10),
      email: yup.string().required().email(),
      password: yup
        .string()
        .required()
        .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"),
      rePassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password"), null], "Passwords Must Match"),
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
        <h1 className="text-center text-xl uppercase pb-3">Sign Up</h1>
        {inputs.map((item, i) => (
          <Input
            item={item}
            key={i}
            handleChange={handleChange}
            formik={formik}
          />
        ))}
        <button
          type="submit"
          className="bg-white/20 p-3 mt-2 rounded-md hover:bg-white/40 text-xs">
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
