import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [message, setMessage] = useState({});
  const [errorwarning, setErrorwarning] = useState("");
  const [data, setData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();

  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrorwarning("");
  };

  const submithandler = async (e) => {
    e.preventDefault();

    await axios
      .post("https://workout-trainer-api.vercel.app/register", data)
      .then((response) => {
        alert(response.data.msg);
        setMessage(response.data);
      })
      .catch((err) => setErrorwarning(err.response.data.msg));
  };

  if (message.status === "ok") {
    return navigate("/login", { replace: true });
  }
  const clickonHandler = () => {
    if (localStorage.getItem("token")) {
      navigate("/home", { replace: true });
    } else {
      navigate("/login");
    }
  };

  return (
    <Container>
      <form onSubmit={submithandler} className="form-container">
        <h1>Sign Up</h1>
        <p>Create Your Account</p>
        <input
          type="text"
          name="username"
          onChange={changehandler}
          placeholder="Name"
          className="input-box"
        />
        <br />
        <input
          type="email"
          name="email"
          onChange={changehandler}
          placeholder="Email Address"
          className="input-box"
        />
        <br />
        <input
          type="text"
          name="mobile"
          onChange={changehandler}
          placeholder="Mobile Number"
          className="input-box"
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={changehandler}
          placeholder="Password"
          className="input-box"
        />
        <br />
        <input
          type="password"
          name="confirmpassword"
          onChange={changehandler}
          placeholder="Confirm Password"
          className="input-box"
        />
        <br />
        <p className="warning">{errorwarning ? errorwarning : null}</p>
        <button type="submit">Register</button>
        <p>
          Already have an account?
          <span onClick={clickonHandler}>Sign In</span>
        </p>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #fffafb;
  text-align: center;
  button {
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    height: 40px;
    width: 150px;
    margin: 0px 20px 20px 0px;
    text-align: center;
  }
  .form-container {
    border: 1px solid gray;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 2px 3px 3px rgba(20, 20, 20, 0.3);
    width: 350px;
  }
  h1 {
    font-size: 50px;
    margin-bottom: 15px;
  }
  span {
    color: #0a4857;
    font-weight: bold;
    cursor: pointer;
  }
  label {
    font-size: 10px;
  }
  p {
    margin-bottom: 10px;
  }
  .msg-red {
    color: red;
    margin: 5px;
  }
  .msg-green {
    color: green;
    margin: 5px;
  }
  .warning {
    color: red;
  }
  .input-box {
    height: 40px;
    margin: 5px;
    width: 280px;
    border-radius: 5px;
    padding-left: 10px;
  }
`;

export default Register;
