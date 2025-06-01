import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <h4>{text || "default value"}</h4>
      {text && (
        <div>
          <h2>Return this</h2>
          <h2>{name}</h2>
        </div>
      )}

      {user && <SomeComponent name={user.name} />}

      <h2 style={{ margin: "1 rem", color: "red" }}>
        Ternary Conditional Operator
      </h2>
      <button type="button" className="btn">
        {isEditing ? "Edit" : "Add"}
      </button>

      {user ? <div>Hello there {user.name}</div> : <div>Please login</div>}
    </>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Returned Component</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
