import React, { Component } from 'react';
import axios from 'axios';

class FinancesData extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: {},
            isLoaded: false
        };
    }

    componentDidMount () {

        axios.get('http://127.0.0.1:8000/transactions/')
            .then(res => {
                console.log(res)
                this.setState({items: res.data.transactions, isLoaded: true})
            });
    }

    render() {
        
        const { items, isLoaded } = this.state;

        if (!isLoaded){
            return <div>Loading...</div>
        }else{
            return (
                <div>
                    {
                    items.length ?
                    items.map(data => {
                        return (
                            <div className="stats">
                                <label> {data.transaction_type} </label> | 
                                <b> {data.traded_player_name} </b>
                                <label style={{float: 'right'}}> € {data.value} </label>
                            </div>
                        );
                     }) : null
                    }
                </div>
                
            );
        }
    }

}

export default FinancesData;

