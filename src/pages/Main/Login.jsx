
import React, { useState } from "react"
import banner from '../../assets/img/Main/home/banner.png'
import { NavLink } from "react-router-dom"

export default function (props) {
  let [authMode, setAuthMode] = useState("signup")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container mx-2">
        <form className="Auth-form">
          <div className="Auth-form-content">
            {/* <h3 className="Auth-form-title">Sign In</h3> */}
            <img src={banner} alt="" className="w-100" />
            <div className="form-group mt-3">
              <label>Phone</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="09*********"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn text-white fw-bold" style={{background: 'linear-gradient(6deg, rgba(102, 0, 149, 1) 0%, rgba(52, 0, 87, 1) 56%)'}}>
                Submit
              </button>
            </div>
            <p className="text-end mt-2">
               <a href="#" className="text-white text-decoration-none">Forgot password?</a>
            </p>

            <div className="text-center">
              Not registered yet?{" "}
              <NavLink to={'/lotto/register'} className="text-primary" onClick={changeAuthMode}>
                Register
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container mx-2">
      <form className="Auth-form">
        <div className="Auth-form-content">
          {/* <h3 className="Auth-form-title">Sign In</h3> */}
          <img src={banner} className="w-100" alt="" />
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="09*********"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Comfirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Comfirm Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn text-white" style={{background: 'linear-gradient(6deg, rgba(102, 0, 149, 1) 0%, rgba(52, 0, 87, 1) 56%)'}}>
              Submit
            </button>
          </div>
          {/* <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p> */}

          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}