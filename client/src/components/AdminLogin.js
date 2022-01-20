import React, { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id, password);
  };
  return (
    <div className="login-page">
      <div style={{ color: "white", textAlign: "center", margin: "1rem" }}>
        ADMIN LOGIN PAGE
      </div>
      <form className="login-form">
        <div className="row">
          <div className="user-box login">
            <input
              type="text"
              name=""
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label>Category ID</label>
          </div>
          <br />
          <div className="user-box login">
            <input
              type="password"
              name=""
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
        </div>
        <center>
          <button className="btn" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </center>
      </form>
    </div>
  );
};

export default Login;
