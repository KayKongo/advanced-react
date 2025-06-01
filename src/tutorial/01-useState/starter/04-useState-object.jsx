import { useState } from "react";

const UseStateObject = () => {
  // const [name, setName] = useState("Jonathan");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState("Make Money");

  const [person, setPerson] = useState({
    name: "Jonathan",
    age: 24,
    hobby: "Make Money",
  });

  const [isJonathan, setIsJonathan] = useState(true);

  // function to view Moses
  const viewMoses = () => {
    setIsJonathan(false);
    setPerson({
      name: "Moses",
      age: 32,
      hobby: "Lead Israelites",
    });
    console.log("function called");
  };

  const viewJonathan = () => {
    setIsJonathan(true);
    setPerson({
      name: "Jonathan",
      age: 24,
      hobby: "Make Money",
    });
    console.log("function called");
  };

  // function to switch between Jonathan and Moses
  const switchPerson = () => {
    isJonathan ? viewMoses() : viewJonathan();
    console.log("person switched");
  };

  const changeName = () => {
    setPerson({ ...person, name: "Susan" });
    console.log("name changed");
  };

  const { name, age, hobby } = person;

  return (
    <div>
      <h4>Introduing {name}</h4>
      <h4>{age} years old</h4>
      <h4>Loves to {hobby}</h4>
      <button
        type="button"
        className="btn"
        style={{ marginTop: "2 rem" }}
        onClick={() => switchPerson()}
      >
        Switch Person
      </button>
      <button
        type="button"
        className="btn"
        style={{ marginTop: "2 rem" }}
        onClick={() => changeName()}
      >
        Change Name
      </button>
    </div>
  );
};

export default UseStateObject;
