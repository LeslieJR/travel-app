import React, { Component } from 'react'
import classes from './Tour.module.scss'
export default class Tour extends Component {
    constructor(props){
        super(props);
        this.state={
            showInfo: false
        }
        this.handleInfo=this.handleInfo.bind(this);
    }

    handleInfo(){
        this.setState(prevState => {
            return {
                showInfo: !prevState.showInfo
            }
        })
    }
    render() {
        const {id, city, img, name, info} = this.props.tour;
        
        return (
            <article className={classes.Tour}>
               <div className={classes.ImgContainer}>
                <img 
                alt="cities"
                src={img}
                />
                <span 
                className={classes.CloseBtn} 
                onClick={() => {this.props.remove(id)}}
                >
                    <i className="fas fa-window-close"/>
                </span>
                <div className={classes.TourInfo}>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info{" "}
                      <span onClick={this.handleInfo}>
                          <i className="fas fa-caret-square-down"/>
                      </span></h5>
                    {this.state.showInfo ? <p>{info}</p> : null }
                   
                </div>
               </div> 
            </article>
            
        )
    }
}
