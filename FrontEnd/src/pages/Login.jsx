import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/Loginpage.css";

const Login = () => {
  const img =
    "https://images.unsplash.com/photo-1593538312308-d4c29d8dc7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("http://localhost:8080/api/v1/users/Login", values);
      setLoading(false);
      message.success("Login successful");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="login-page">
      {loading && <Spinner />}
      <div className="row container">
        <h1>Expense Management System - MERN STACK</h1>
        <div className="col-md-6">
          <img src={img} alt="login-img" width="100%" height="100%" />
        </div>
        <div className="col-md-4 login-form">
          <Form layout="vertical" onFinish={submitHandler}>
            <h1>Login Form</h1>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input type="email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter your password!" }]}
            >
              <Input type="password" />
            </Form.Item>
            <div className="d-flex justify-content-between">
              <Link to="/register">
                Not a user? Click here to register!
              </Link>
              <button className="btn" type="submit">
                Login
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
