import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
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

        axios.post('transactions/', JSON.parse(localStorage.getItem('user')))
            .then(res => {
                console.log(res)
                this.setState({items: res.data.transactions, isLoaded: true})
            }) 
    }

    render() {
        
        const { items, isLoaded } = this.state;
        let action;

        if (!isLoaded){
            return <div class="spinner-border text-success"/>
        }else{
            return (
                <ul class="text-white">
                    {
                    items.length ?
                    items.map(data => {

                        if (data.transaction_type === "SALE"){
                            action = (<p class="badge badge-danger p-1 m-1 float-right">{data.transaction_type} </p>)
                        }
                        else {
                            action = (<p class="badge badge-success p-1 m-1 float-right">{data.transaction_type} </p>)
                        }

                        return (
                            <div class="shadow m-2 p-1 rounded-lg" style={{background: '#444'}}>
                                {action}
                                <p class="pl-1 pt-3">
                                    <b> {data.traded_player_name}</b> 
                                    <span class="float-right pr-2">
                                        <NumberFormat value={data.value} displayType={'text'} thousandSeparator={true} prefix="€ "/>
                                    </span> 
                                </p>
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