import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;
    const fakeId = Date.now();
    const newPerson = {
      id: fakeId,
      name,
    };
    setPeople([...people, newPerson]);
    setName("");
  };

  const removeUser = (id) => {
    const newList = people.filter((person) => person.id != id);
    setPeople(newList);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {/* render users below */}
      <h2>Users</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <ul key={id}>
            <li>{name}</li>
            <button
              type="button"
              className="btn"
              onClick={() => removeUser(id)}
            >
              Remove User
            </button>
          </ul>
        );
      })}

      {people.length == 0 && (
        <div>
          <button
            type="button"
            className="btn btn-hipster"
            onClick={() => setPeople(data)}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};
export default UserChallenge;
