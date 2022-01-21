import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { TOKEN_ID } from "../utils/constants";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [categoryId, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");

    if (categoryId === "" || password === "") {
      toast.error("All fields are required*", {
        id: toastId,
      });
      return;
    }

    try {
      const data = {
        categoryId,
        password,
      };

      console.log(data);
      const res = await axios.post("http://localhost:5000/admin/login", data);
      console.log(res);

      if (res.data.success) {
        toast.success(res.data.message, {
          id: toastId,
        });
        localStorage.setItem(TOKEN_ID, res.data.data.token);
        return;
      } else {
        toast.error(res.data.message, {
          id: toastId,
        });
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong `, {
        id: toastId,
      });
    }
  };

  return (
    <div className="login-page">
      <h2>REVELS '22</h2>
      <h3 style={{ color: "white", textAlign: "center", margin: "1rem" }}>
        ADMIN LOGIN PAGE
      </h3>
      <form className="login-form">
        <div className="row">
          <div className="user-box login">
            <input
              type="text"
              name=""
              required
              value={categoryId}
              onChange={(e) => setId(e.target.value)}
            />
            <label>Category ID</label>
          </div>
        </div>
        <div className="row">
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
            Login
          </button>
        </center>
      </form>
    </div>
  );
};

export default Login;
