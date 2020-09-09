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
        this.removeTour=this.removeTour.bind(this)
        
    }

    removeTour(id){
        console.log(id);
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        })
    }
    render(){
        console.log(this.state.tours)
        const {tours} = this.state;
        return(
            <div className={classes.TourList}>
                {
                tours.map(tour=>{
                    return(
                        <Tour 
                        key={tour.id} 
                        tour={tour} 
                        remove={this.removeTour}
                        />
                        )
                    })
                }

            </div>
        )
    }
}

export default TourList;