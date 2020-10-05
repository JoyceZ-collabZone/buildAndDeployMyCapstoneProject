import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
// import { userRefreshUserListing } from "../api";
import { UserListingPage } from "./UserContainer";
import { RedocStandalone } from "redoc";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import Jumbo from "./Jumbo";

function NavComp(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleUserClickLogout = () => {
    window.localStorage.removeItem("token");
    props.afterLogoutState(false); // set loggedin to false
  };

  return (
    <React.Fragment>
      <div className="navBar">
        <Navbar color="dark" white expand="xs" className="fixed-top">
          {/* <NavbarBrand>Open Banking Dev Portal Register</NavbarBrand> */}
          {/* <NavbarToggler onClick={toggle} /> */}
          {/* <Collapse isOpen={isOpen} navbar> */}
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                <Button color="success">Home</Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/register/user">
                <Button color="success">Developer Registration</Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/register/admin">
                <Button color="success">Admin Registration</Button>
              </NavLink>
            </NavItem>

            <NavItem>
              {!props.beforeSignInState && (
                <NavLink tag={Link} to="/login">
                  <Button color="success"> Login</Button>
                </NavLink>
              )}
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/APIMetadata/5f2e06043a8c4409ecff1407">
                <Button color="success"> Public API</Button>
              </NavLink>
            </NavItem>
            {props.beforeSignInState && (
              <NavItem>
                <NavLink tag={Link} to="/APIMetadata/">
                  <Button color="success"> API Swagger Definition</Button>
                </NavLink>
              </NavItem>
            )}

            {props.beforeSignInState && (
              <NavItem>
                <NavLink to="/logout" onClick={handleUserClickLogout}>
                  <Button color="success"> Logout</Button>
                </NavLink>
              </NavItem>
            )}
          </Nav>

          {/* </Collapse> */}
        </Navbar>
      </div>
    </React.Fragment>
  );
}

export default NavComp;
