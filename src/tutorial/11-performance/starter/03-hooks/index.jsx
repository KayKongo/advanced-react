import { useState, useCallback, useMemo } from "react";
import { data } from "../../../../data";
import List from "./List";
import slowFunction from "./slowFunction";

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  // slow function
  const value = useMemo(() => slowFunction(), []);
  console.log(value);

  // remove person functionality memoized with useCallback hook
  const removePerson = useCallback(
    (id) => {
      const newPerson = people.filter((person) => person.id !== id);
      setPeople(newPerson);
    },
    [people]
  );

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

export default LowerState;

// useCallback memoizes an expensive function
// useMemo memoizes a value or a function that returns a value (especially when the function contains an expensive calculation that you don't want to call too frequently)
