import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { logout } from "../redux/userSlice";

import "../assets/css/Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";


const Navbar = () => {
  const dispatch= useDispatch();
  const navigate=useNavigate();
  const logoutHandler=()=>{
    dispatch(logout())
    navigate("/")
  }

 
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>M</span>OBILE 
            <span>S</span>ERVICE
          </h2>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <div className="button-54">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            </div>
            <div className="button-01">
            <li>
              <NavLink to="">About us</NavLink>
            </li>
            </div>
            <div className="button-02">
            <li>
              <NavLink to="">Services</NavLink>
            </li>
            </div>
            <div className="button-03">
            <li>
              <NavLink to="">Contact</NavLink>
            </li>
            </div>
            <div className="button-04">
            <li>
              <NavLink to="">Admin Login</NavLink>
            </li>            
            </div>
            <div className="button-5">
            <li>
              <NavLink to="">Signup</NavLink>
            </li>
            </div>
            {/* <li>
          <Button  style={{backgroundColor: "red",font: 19}}  sx={{":hover": {bgcolor: "#FFFFFF",
          color: "red"}}} variant="contained" onClick={logoutHandler}>Logout</Button>
            </li> */}
          </ul>
        </div>
        

        
      </nav>
    </>
  );
};

export default Navbar;