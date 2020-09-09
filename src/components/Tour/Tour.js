import React, { Component } from 'react'
import classes from './Tour.module.scss'
export default class Tour extends Component {
    render() {
        return (
            <section className={classes.Tour}>
               <div className={classes.ImgContainer}>
                <img 
                alt="cities"
               
                src="https://images.pexels.com/photos/4297813/pexels-photo-4297813.jpeg?cs=srgb&dl=pexels-ready-made-4297813.jpg&fm=jpg"
                />
                <span className={classes.CloseBtn}><i className="fas fa-window-close"/></span>
                <div className={classes.TourInfo}>
                    <h3>City</h3>
                    <h4>Name</h4>
                    <h5>info{" "}<span><i className="fas fa-caret-square-down"/></span></h5>
                    <p>Culpa nulla excepteur id reprehenderit officia.Tempor dolor ullamco eiusmod ipsum reprehenderit magna minim.</p>
                </div>
               </div> 
            </section>
            
        )
    }
}
