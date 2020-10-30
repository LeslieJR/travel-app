import React, { Component } from 'react';
import Tour from '../../components/Tour/Tour';
import Form from '../../components/Form/Form';
import classes from './TourList.module.scss';
import Spinner from '../../UI/Spinner/Spinner';

class TourList extends Component{
    
    state={
        fetching:true,
        country:"",
        tours:[]   
    }

    componentDidMount(){
        fetch("https://www.triposo.com/api/20190906/location.json?part_of=Spain&tag_labels=city&count=10&order_by=-score", {
                headers: {
                    'X-Triposo-Account': 'M47KVSBF',
                    'X-Triposo-Token': 'xkf5ronrbbpj772o4kq70ac3dye4rnb1'
                }
            })
            .then(response =>response.json())
            .then(data => {
                this.setState({
                    fetching: false,
                    tours: data.results
                })
            })
            .catch(error=>console.log(error))
    }

    citiesFetched = (citiesData) => {
        //console.log('TourList', citiesData);
        this.setState({
            fetching: false,
            tours:  citiesData
        })
      }

    

    removeTour=(id)=>{
        //console.log(id);
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        })
    }
    render(){
        //console.log(this.state.tours)
        const {tours} = this.state;
        
        return(

            <div className={classes.Tour}>
                <Form onSubmit={this.citiesFetched}/>
               { this.state.fetching ? <Spinner/> :
                <div className={classes.TourList}>
                {
                 tours.map(tour=>{
                    return(
                        <Tour 
                        key={tour.id} 
                        tour={tour} 
                        score={tour.score}
                        remove={this.removeTour}
                        />
                        )
                    })
                }
                </div>}   
            </div>
            
        )
        
    }
}

export default TourList;