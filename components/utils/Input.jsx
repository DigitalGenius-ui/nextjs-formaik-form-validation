import React from "react";

const Input = ({ item, handleChange, formik }) => {
  const { type, placeholder, name, label } = item;
  return (
    <>
      <label className="text-xs">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        onBlur={formik.handleBlur}
        className={`w-full p-3 outline-none bg-transparent text-xs
        border border-gray-600 rounded-md focus:border-gray-300
        ${formik.errors[name] ? "border-red-400 focus:border-red-400" : ""}
        `}
      />
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-xs text-red-400">{formik.errors[name]}</span>
      )}
    </>
  );
};

export default Input;
