import React, {
    Component
} from 'react';
import './Form.module.scss'
class Form extends Component {

    state = {
        country: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://www.triposo.com/api/20190906/location.json?part_of=${this.state.country}&tag_labels=city&count=10&order_by=-score`, {
                headers: {
                    'X-Triposo-Account': 'M47KVSBF',
                    'X-Triposo-Token': 'xkf5ronrbbpj772o4kq70ac3dye4rnb1'
                }
            })
            .then(response =>response.json())
            .then(data => {
                this.props.onSubmit(data.results)
            })
            .catch(error => {
                console.log(error);
            });

    }

    render() {

        return ( 
            <form onSubmit = {
                this.handleSubmit
            } >
            <input value = {
                this.state.country
            }
            onChange = {
                e => this.setState({
                    country: e.target.value
                })
            }
            type = "text"
            placeholder = "Search a country"
            required 
            style={{textTransform:"capitalize"}}/>
            <button > Search </button> 
            </form>

        )
    }
}

export default Form;