import { useState } from "react";

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false);

  // Longer approach
  // const handleClick = () => {
  //   {
  //     toggle ? setToggle(false) : setToggle(true);
  //   }
  //   return;
  // };
  // console.log(toggle);

  const ToggledComponent = () => {
    return (
      <h4
        style={{
          background: "aqua",
          color: "red",
          margin: "2rem",
          fontWeight: "bold",
        }}
      >
        Hello, you toggled me!
      </h4>
    );
  };

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        {toggle ? "untoggle" : "toggle"}
      </button>
      {toggle && <ToggledComponent />}
    </div>
  );
};

export default ToggleChallenge;
