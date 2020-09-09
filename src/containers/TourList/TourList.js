import React, { Component } from 'react';
import Tour from '../../components/Tour/Tour';
import classes from './TourList.module.scss'
import {tourData} from '../../components/tourData'
class TourList extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:false,
            error: null,
            tours:tourData
        }
    }

    render(){
        console.log(this.state.tours)
        const {tours} = this.state;
        return(
            <div className={classes.TourList}>
                {
                    tours.map(tour=>{
                        return(
                            <Tour key={tour.id} tour={tour}/>
                        )
                    })
                }

            </div>
        )
    }
}

export default TourList;