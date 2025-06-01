import avatar from "../../../assets/default-avatar.svg";

const Person = ({ name, nickName = "has no nickname", images }) => {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "3.125rem" }} />
      <h4>{name}</h4>
      <p>{nickName}</p>
    </div>
  );
};

export default Person;
