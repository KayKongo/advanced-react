import { useState, useEffect } from "react";

const Example = () => {
  const [condition, setCondition] = useState(true);
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log(
      "useEffect worked! Never call hooks inside nor after conditionals or loops."
    );
  }, []);

  if (condition) {
    return <h2>Hello There</h2>;
  }

  return <h2>example</h2>;
};

export default Example;
