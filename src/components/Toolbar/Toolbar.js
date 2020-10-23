import React from "react";
import classes from "./Toolbar.module.scss";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
// get our fontawesome imports
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const toolbar = (props) => (
  <header className={classes.Header}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav>
      <NavigationItems/>
    </nav>
    <div >
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={classes.Header__icon} icon={faFacebook} size="lg"/></a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={classes.Header__icon} icon={faInstagram} size="lg"/></a>
      <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={classes.Header__icon} icon={faTwitter} size="lg"/></a>
    </div>
  </header>
);

export default toolbar;
