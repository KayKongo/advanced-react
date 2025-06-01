import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        {toggle ? "Untoggle state" : "Toggle state"}
      </button>
      {console.log(`The toggle state is ${toggle}`)}

      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("Render");

    const intervalId = setInterval(() => {
      console.log("Yie, the interval is running!");
    }, 1000);

    clearInterval(intervalId);
    console.log("cleanup");
  }, []);

  return (
    <div>
      <h4 className="alert alert-danger">How dare you toggle me?!</h4>
    </div>
  );
};

export default CleanupFunction;
