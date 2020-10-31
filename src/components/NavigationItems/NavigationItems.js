import React from 'react';

import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact><i  class="fas fa-home"></i> Home</NavigationItem>
        <NavigationItem link="/about"><i  class="fas fa-info-circle"></i> About</NavigationItem>
        <NavigationItem link="/tours"><i  class="fas fa-plane"></i> Tours</NavigationItem>
    </ul>
)

export default navigationItems;