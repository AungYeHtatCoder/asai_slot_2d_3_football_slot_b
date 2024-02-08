import React from "react";

import { Form, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = ()=>{
    return <>
    <Form className="text-center" >
        <div className="d-flex justify-content-center align-items-center">
            <div className="me-5">
                <label for="fileInput" class="form-label">
                    <i class="fa-solid fa-circle-user" style={{fontSize:'7rem'}}></i>
                </label>
                <input type="file" className="form-control visually-hidden" id="fileInput" name="fileInput" accept="image/*" />
            </div>
            <div>
                <p>လက်ကျန်ငွေ</p>
                <p>0.00 kyats</p>
            </div>
        </div>
        
        <div className="my-4">
            <NavLink to={'/top-up'} ><button type="button" className="btn btn-outline-secondary p-2 mx-2">ငွေသွင်းမည်</button></NavLink>
           <NavLink to={'/with-draw'}>
           <button type="button" className="btn btn-outline-success p-2 mx-2">ငွေထုတ်မည်</button>
           </NavLink>
        </div>

        <div className="d-flex justify-content-center">
            <input type="text" className="form-control p-2 outline-none my-2 w-75" value={'Queen'} />
        </div>

        <div className="d-flex justify-content-center">
            <input type="text" className="form-control p-2 outline-none my-2 w-75" value={'+959 ******213'} />
        </div>

        <div className="my-4">
            <Link to="/change-password" type="button" className="btn btn-outline-secondary p-2 mx-2">Change Password</Link>
            <button type="button" className="btn btn-outline-success p-2 mx-2">Update Profile</button>
        </div>
    </Form>
    </>
}

export default Profile