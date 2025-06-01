import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleReset = () => {
    setCount(0);
    console.log("number of clicks has been reset");
  };

  return (
    <>
      <h3>useState error example</h3>
      <h3>You clicked {count} times</h3>
      <br />
      <button type="button" className="btn" onClick={handleClick}>
        Click Me!
      </button>
      <br />
      <button type="button" className="btn" onClick={handleReset}>
        Reset Clicks
      </button>
    </>
  );
};

export default ErrorExample;
