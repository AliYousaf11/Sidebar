import React from "react";

export const InputField = ({type,InputName,HandleInput,name,labelName}) => {
  return (
    <div className="inputBox">
      <input
        type={type}
        value={InputName}
        onChange={HandleInput}
        autoComplete="off"
        name={name}
        required
      />
      <label htmlFor="name">{labelName}</label>
    </div>
  );
};
