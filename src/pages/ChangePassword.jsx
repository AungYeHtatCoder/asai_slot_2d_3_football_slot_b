import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import "../assets/css/changePassword.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BASE_URL from "../hooks/baseURL";
import { Alert } from "react-bootstrap";

function ChangePasswordPage() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const handlePassword = (e) => {
    e.preventDefault();
    const inputData = {
      currentPassword: currentPassword,
      password: password,
    };
    // console.log(inputData);
    fetch(BASE_URL + "/changePassword", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
      body: JSON.stringify(inputData),
    })
      .then(async (response) => {
        if (!response.ok) {
          let errorData;
          try {
            errorData = await response.json();
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
          if (response.status === 422) {
            setError(errorData.errors);
            console.error(`${response.status}:`, errorData);
          } else if (response.status === 401) {
            setError(errorData.message);
            console.error(`${response.status}:`, errorData);
          } else {
            console.error(`Unexpected error with status ${response.status}`);
          }
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setSuccess("New Password Changed Successfully.");
        setCurrentPassword("");
        setPassword("");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      {/* <div className="cgPwTitle py-3 ">
        <FaLock /> လျှို့ဝှတ်နံပါတ်အားမူလအတိုင်းပြန်လုပ်သည်
      </div> */}
      {success && <Alert variant="success">{success}</Alert>}
      <Form className="p-4 cgPwForm" onSubmit={handlePassword}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>စကားဝှက်အဟောင်း</Form.Label>
          <Form.Control
            type="password"
            placeholder="စကားဝှက်အဟောင်း"
            onChange={(e) => setCurrentPassword(e.target.value)}
            value={currentPassword}
          />
          {error.currentPassword && (
            <span className="text-danger">*{error.currentPassword}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>စကားဝှက်အသစ်</Form.Label>
          <Form.Control
            type="password"
            placeholder="စကားဝှက်အသစ်"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <div className="cgPwBtn">
          <Button variant="warning" type="submit">
            အတည်ပြုပါ။
          </Button>
        </div>
      </Form>
    </>
  );
}

export default ChangePasswordPage;

//  လျှို့ဝှတ်နံပါတ်အားမူလအတိုင်းပြန်လုပ်သည်
// စကားဝှက်အသစ်
// စကားဝှက်အသစ်ကို အတည်ပြုပါ။
