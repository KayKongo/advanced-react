import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  // Function to remove a person
  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
    console.log(`Person removed`);
  };

  // Function to clear the list
  const clearList = () => {
    setPeople([]);
    console.log("List has been cleared!");
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{id}</h4>
            <h4>{name}</h4>
            <button className="btn" onClick={() => removePerson(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <br />
      <br />
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => clearList()}
      >
        Clear List!
      </button>
    </>
  );
};

export default UseStateArray;
