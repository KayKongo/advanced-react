import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `The link is not valid. Status: ${response.status} ${response.statusText}`
          );
          setIsError(true);
          setisLoading(false);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
      setisLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error! Couldn't Fetch</h2>;
  }

  const { name, avatar_url, company, html_url, bio } = user;
  return (
    <div>
      <img
        style={{ width: `160px`, borderRadius: `24px` }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <code>Check him out at {html_url}</code>
      <p>What he has to say: "{bio}"</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
