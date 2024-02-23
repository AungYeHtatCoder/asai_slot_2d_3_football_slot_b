import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import "../assets/css/login.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import BASE_URL from "../hooks/baseURL";
import { FaUser } from "react-icons/fa";
const LoginPage = () => {
  const navigate = useNavigate();
  const form = useForm({
    mode: "onTouched",
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const auth = localStorage.getItem("authToken");

  if (auth) {
    useEffect(() => {
      navigate("/"); // Navigate to the home route
    }, [navigate]);
  }

  const [eye, setEye] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //login api calling
  const onSubmit = (loginData) => {
    if (loginData) {
      setLoading(true);
    }

    //fetch api for login url
    fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Log In Failed");
        }
        return response.json();
      })
      .then((responseData) => {
        // console.log('Login successful:', data);
        setData(responseData);
        if (data) {
          const userData = responseData.data.user;

          localStorage.setItem("authToken", responseData.data.token);
          localStorage.setItem(
            "authUser",
            JSON.stringify({
              userData,
            })
          );
          setLoading(false);

          //redirect to home page
          navigate("/");
        } else {
          throw new Error("Token not found in response");
        }
      })
      .catch((error) => {
        console.error(error);
        if (error) {
          setErrorMessage("Phone Or Password is incorrect!");
          setLoading(false);
        }
      });
  };

  return (
    <div className="my-5 login py-3 py-sm-5 w-50 mx-auto">
      {errorMessage && (
        <div
          className="alert alert-danger mt-2"
          role="alert"
          style={{ fontSize: "14px" }}
        >
          {errorMessage}
        </div>
      )}
      <div className="text-center">
        <img src={logo} className="logo" />
      </div>
      <h1>လော့ဂ်အင်ဝင်ရန်</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-3 mx-sm-5 my-3 my-sm-5">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FaUser />
            </InputGroup.Text>
            <Form.Control
              className={`form-control ${
                errors.name && "border-2 border-danger"
              }`}
              type="type"
              placeholder="Player Name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              {...register("name", {
                required: "Name is Required.",
              })}
            />
            <div className="error text-danger">{errors.name?.message}</div>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <FaLock />
            </InputGroup.Text>
            <Form.Control
              className={`form-control ${
                errors.password && "border-2 border-danger"
              }`}
              type="password"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              {...register("password", {
                required: "Password is Required.",
              })}
            />
          </InputGroup>
          <button className="loginBtn">Login</button>
        </div>
      </form>
      <div
        style={{ cursor: "pointer" }}
        className="px-3 px-sm-5 d-flex align-items-center justify-content-between"
      >
        <NavLink
          className="text-decoration-none text-light  "
          to={"/slots/register"}
        >
          အကောင့်ဖွင့်ရန်
        </NavLink>
        <p className="mt-3"> ဆက်သွယ်ရန် </p>
      </div>
    </div>
  );
};

export default LoginPage;
