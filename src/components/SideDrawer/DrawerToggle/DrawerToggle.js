import React from "react";
import classes from "./DrawerToggle.module.css";
import logo from "../../../assets/images/logo.png"
const drawerToggle = (props) => (
  <div onClick={props.clicked}>
    <img src={logo} className={classes.DrawerToggle} alt="logo"/>
  </div>
);

export default drawerToggle;
