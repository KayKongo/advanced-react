import Item from "./Person";
import { memo } from "react";

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
};
export default memo(List);

// NOTE: React.memo checks for changes in the props of the component in its braces/ brackets. If there's no change, it does not allow the said component to re-render.

// React.memo memoizes a component
