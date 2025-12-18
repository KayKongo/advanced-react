import { useState, useEffect, useCallback } from "react";

const FetchData = () => {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Ermmm the link seems to be either broken or non-existent: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h1>Github Users</h1>
      <ul className="users">
        {users.map((user) => {
          console.log(user);

          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
