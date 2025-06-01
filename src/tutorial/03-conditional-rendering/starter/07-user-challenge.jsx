import { useState } from "react";

const UserChallenge = () => {
  const [user, setuser] = useState(null);

  const handleLogin = () => {
    return setuser({ name: "John Doe" }), console.log("User logged in");
  };

  const handleLogout = () => {
    return setuser(null), console.log("User logged out");
  };

  const Login = () => {
    return (
      <div>
        <h4>Hello there! Please log in</h4>
        <button className="btn" onClick={() => handleLogin()}>
          Log in
        </button>
      </div>
    );
  };

  const Logout = () => {
    return (
      <div>
        <h4 style={{ color: "aqua", fontWeight: "bold", margin: "1rem" }}>
          Hello {user.name}!
        </h4>
        <p>Feel free to logout anytime</p>
        <button className="btn" onClick={() => handleLogout()}>
          Log out
        </button>
      </div>
    );
  };

  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default UserChallenge;
