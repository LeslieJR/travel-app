import React from 'react';
import classes from './Home.module.scss';
function Home() {
    return(
        <div>
            <div className={classes.Banner}>
                <div className={classes.Title}>
                    <h1>Start Exploring</h1>
                    <p>Find your next adventure</p>
                    <button className={classes.Btn}>
                        <span>Let's explore!</span>
                    </button>
                </div>
            </div>      
        </div>
        )
    
}

export default Home;