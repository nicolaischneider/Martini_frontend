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

        //axios.get('http://46.101.237.138/userstats/')
        axios.get('http://127.0.0.1:8000/userstats/')
            .then(res => {
                console.log(res)
                this.setState({items: res.data, isLoaded: true})
            });
    }

    render() {
        
        const { items, isLoaded } = this.state;

        if (!isLoaded){
            return <div class="spinner-border text-success"/>
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
