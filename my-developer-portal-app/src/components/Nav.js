import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";

import { RedocStandalone } from "redoc";
import Logout from "./Logout";

// import { UserListingPage } from "./UserContainer";

export default function Nav(props) {
  const handleUserClickLogout = () => {
    window.sessionStorage.removeItem("token");
    props.loggedInState(false); // set loggedin to false
    props.loggedInUser("");
    props.setScreenMessageLogout({
      message: `You have successfully logged out`,
      state: true,
    });
  };

  return (
    <div class="topnav">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/user/login">Sign In</Link>
        </li>
        <li></li>
        <li>
          <Link to="/register/user">Create New User</Link>

          <li>
            <Link to="/docupload">Upload New Swagger</Link>
          </li>
        </li>
        <li>
          <Link to="/software/new">Software Product Registration</Link>
        </li>
        <li>
          <Link to="/softwares/all"> View All Software Product</Link>
        </li>
        {props.loggedInState && (
          <Link to="/APIMetadata/"> API Swagger Definition</Link>
        )}
        {props.loggedInState && (
          <Link to="/logout" onClick={handleUserClickLogout}>
            Logout
          </Link>
        )}
      </ul>
    </div>
  );
}
