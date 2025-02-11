import React from "react";
import useStore from "../store"; // Updated path



const LoginForm = () => {
  const { username, password, setUsername, setPassword } = useStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username *"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password *"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default LoginForm;
