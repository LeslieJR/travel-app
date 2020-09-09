import React, { Component } from 'react';
class About extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:false,
            error: null
        }
    }

    render(){
        return(
            <div>
                <h1>About</h1>
            </div>
        )
    }
}

export default About;