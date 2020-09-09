import React, { Component } from 'react'
import classes from './Tour.module.scss'
export default class Tour extends Component {
    render() {
        const {city, img, name, info} = this.props.tour;
        return (
            <section className={classes.Tour}>
               <div className={classes.ImgContainer}>
                <img 
                alt="cities"
                src={img}
                />
                <span className={classes.CloseBtn}><i className="fas fa-window-close"/></span>
                <div className={classes.TourInfo}>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info{" "}<span><i className="fas fa-caret-square-down"/></span></h5>
                    <p>{info}</p>
                </div>
               </div> 
            </section>
            
        )
    }
}
