import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("john doe");

  const exampleCode = name && "hello world" && [1, 2, 3, 4, 5];
  return (
    <div>
      <h4>Falsy OR: {text || "hello world"}</h4>
      <h4>Falsy AND: {text && "hello world"}</h4>
      <h4>Truthy OR: {name || "hello world"}</h4>
      <h4>Truthy AND: {name && "hello world"}</h4>
      <h4>{exampleCode}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
