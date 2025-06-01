import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log("Clicked the button"); // Proof that the button was clicked a number of times

      // pass a function to setValue to avoid using the stale state (also known as stale closure)
      // this function will always have the most recent value of state
      setValue((currentState) => {
        const newStare = currentState + 1;
        return newStare;
      });
    }, 3000);
  };

  return (
    <>
      <h3>{value}</h3>
      <button
        className="btn"
        style={{ marginTop: "2 rem" }}
        onClick={() => handleClick()}
      >
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
