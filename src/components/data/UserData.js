import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import axios from 'axios';

class UserData extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: {},
            isLoaded: false
        };
    }

    componentDidMount () {
        console.log("daten userstats")
        console.log(JSON.parse(localStorage.getItem('user')))
        axios.post('userstats/', JSON.parse(localStorage.getItem('user')))
            .then(res => {
                console.log(res)
                this.setState({items: res.data, isLoaded: true})
            })   
    }

    render() {
        
        const { items, isLoaded } = this.state;

        if (!isLoaded |localStorage.getItem('user')===null){
            return null
        }else{
            return (
                <div className="col-sm p-3 text-white rounded-lg shadow-lg" style={{background: '#333'}}>
                    <p><b>{items.user_name}</b></p>
                    <p>Budget <b class="float-right"><NumberFormat value={items.budget} displayType={'text'} thousandSeparator={true} prefix="€ "/> </b></p>
                    <p>Score <b class="float-right"> {items.points} </b></p>  
                </div> 
            );
        }
    }
}

export default UserData;