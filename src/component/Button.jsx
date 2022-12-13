import React from "react";

function Button({ name, bgcolor, hover, evt }) {
  return (
    <>
      <div><h1>gg</h1></div>
      <button
        type="submit"
        className={"w-full py-2 rounded-md text-white " + bgcolor + " " + hover}
        onClick={evt}
      >
        {name}
      </button>
    </>
  );
}

export default Button;