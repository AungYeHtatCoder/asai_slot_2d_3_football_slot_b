import React, { useEffect, useState } from "react";
import user from "../assets/img/user.png";
import { Alert, Form } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";
import PROFILE_URL from "../hooks/profileURL";

const ProfilePage = () => {
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { data: user } = useFetch(BASE_URL + "/user");
  console.log(user);
  useEffect(() => {
    setPhone(user.phone);
  }, [user]);

  const handleProfile = (e) => {
    e.preventDefault();
    const inputData = {
      phone: phone,
      image: image,
    };

    console.log(inputData);
    fetch(BASE_URL + "/profile", {
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
        setSuccess("Profile Updated Successfully.");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="px-2 py-5 d-flex flex-column  align-items-center">
      {success && <Alert variant="success">{success}</Alert>}
      <img
        src={user && PROFILE_URL + "/" + user.profile}
        style={{ width: "50px", height: "50px", borderRadius: "100%" }}
      />
      <div className="mt-3 d-flex align-items-center gap-2">
        <i class="fa-solid fa-wallet"></i>
        <span>K 9,850</span>
      </div>
      <Form className="my-4" onSubmit={handleProfile}>
        <Form.Group className="mb-3">
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name..."
            readOnly
            value={user && user.name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Phone..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <button
          className="btn text-light float-end"
          style={{ background: "#562991" }}
          type="submit"
        >
          ပြောင်းမည်
        </button>
      </Form>
    </div>
  );
};

export default ProfilePage;
