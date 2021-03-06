import React, { Component } from 'react'
import classes from './Tour.module.scss'
export default class Tour extends Component {
   /*state={
        showInfo: false
        }
     

    handleInfo = () => {
        this.setState(prevState => {
            return {
                showInfo: !prevState.showInfo,
            }
        })
    }*/
    render() {
        //console.log(this.props.tour)
        const {id, name,score, snippet, images} = this.props.tour;
        
        return (
            <article className={classes.Tour}>
               <div className={classes.Container}>
                   <div className={classes.Container__img} style={{
                       backgroundImage: `url(${images[0].sizes.medium.url})`}}>
                   </div>
                   
                   <span 
                   onClick={() => {this.props.remove(id)}}
                   >
                       <i className="fas fa-window-close"/>
                   </span>
                   <div className={classes.Container__info}> 
                       <div>
                           <div>{name}</div>
                           <div>{score.toFixed(1)}</div>
                        </div>
                       <p>{snippet}</p> 
                   </div>
               </div> 
            </article>
            
        )
    }
}
