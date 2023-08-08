import React from "react";

const Input = ({ item }) => {
  const { type, placeholder, name, label } = item;

  const error = false;
  return (
    <>
      <label className="text-xs">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full p-3 outline-none bg-transparent text-xs
            border border-gray-600 rounded-md focus:border-gray-300"
      />
      {error && <span className="text-xs text-red-400">error message</span>}
    </>
  );
};

export default Input;
