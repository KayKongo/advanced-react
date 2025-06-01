import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    console.log("component mounted");

    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return <h2>Multiple Returns Basics Fully Loaded</h2>;
};
export default MultipleReturnsBasics;
