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

        //axios.get('http://46.101.237.138/transactions/')
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
                <ul class="text-white">
                    {
                    items.length ?
                    items.map(data => {
                        return (
                            <div class="shadow m-2 p-1 bg-dark rounded-lg">
                                <p class="badge badge-light p-1 m-1 float-right">{data.transaction_type} </p> 
                                <p class="pl-1 pt-3"><b> {data.traded_player_name} </b> <span class="float-right pr-2">€ {data.value}</span> </p>
                            </div>
                        );
                     }) : null
                    }
                </ul>
                
            );
        }
    }

}

export default FinancesData;

