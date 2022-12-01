import React from "react";

function Checkbox({ name }) {
  return (
    <>
      <div className="flex gap-2">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">{name}</label>
      </div>
    </>
  );
}

export default Checkbox;
