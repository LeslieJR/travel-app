import React, { Component } from 'react'
import classes from './Tour.module.scss'
export default class Tour extends Component {
   state={
        showInfo: false
        }
     

    handleInfo = () => {
        this.setState(prevState => {
            return {
                showInfo: !prevState.showInfo,
            }
        })
    }
    render() {
        //console.log(this.props.tour)
        const {id, name, snippet, images} = this.props.tour;
        
        return (
            <article className={classes.Tour}>
               <div className={classes.ImgContainer}>
                   <img src={images[0].sizes.medium.url} alt={name}/>
                <span 
                className={classes.CloseBtn} 
                onClick={() => {this.props.remove(id)}}
                >
                    <i className="fas fa-window-close"/>
                </span>
                <div className={classes.TourInfo}>
                    
                    <h4>{name}</h4>
                    <p>{snippet}</p>
                   
                </div>
               </div> 
            </article>
            
        )
    }
}
