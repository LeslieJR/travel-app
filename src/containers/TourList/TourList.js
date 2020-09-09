import React, { Component } from 'react';
import Tour from '../../components/Tour/Tour';
import classes from './TourList.module.scss'
class TourList extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:false,
            error: null
        }
    }

    render(){
        return(
            <div className={classes.TourList}>
                <Tour/>
                
            </div>
        )
    }
}

export default TourList;