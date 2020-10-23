import React  from 'react';
import classes from './About.module.scss';
import img from '../../assets/images/about-section.jpg';

import { faGlobeAmericas, faCompass, faMap, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function About(){
    return(
        <div className={classes.About}>
            <h1>About Us</h1>
            <div className={classes.About__main}>
              <div>
                  <img className={classes.About__image} src={img} alt="quote"/>
               </div>
               <div className={classes.About__paragraphs}>
                   <div>
                       <h2>How we started</h2>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                       </p>
                    </div>
                   <div>
                       <h2>Why you will love us</h2>
                       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?
                       </p>
                   </div>
               </div>  
            </div>
            <div className={classes.About__features}>
                <div>
                    <FontAwesomeIcon icon={faGlobeAmericas} size="3x"  style={{color:"#459d72"}}/>
                    <h2>Explore the world</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus est iure minima porro reiciendis temporibus.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCompass} size="3x" style={{color:"#ef932ec4"}}/>
                    <h2>Meet yourself</h2> 
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus est iure minima porro reiciendis temporibus.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faMap} size="3x" style={{color:"#4f93bd"}}/>
                    <h2>Find your place</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus est iure minima porro reiciendis temporibus.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faHandHoldingHeart} size="3x" style={{color:"#da3f7d"}}/>
                    <h2>Live a healthier life</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus est iure minima porro reiciendis temporibus.</p>
                </div>
            </div>
           
        </div>
        )
}

export default About;