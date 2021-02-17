import React, { Component } from 'react';
import axios from 'axios';

class TransferData extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: {},
            isLoaded: false,
            sold: ""
        };
    }

    componentDidMount () {
        this.getOffers();
    }

    getOffers = async () => {
        //axios.get('http://46.101.237.138/transactions/')
        axios.get('http://127.0.0.1:8000/offers/')
            .then(res => {
                console.log(res)
                this.setState({items: res.data.offers, isLoaded: true})
            });
    }

    acceptOffer = async (offer_id, player_id) => {
        

        const data = {
            offer_id: offer_id,
            player_id: player_id
        }
        //axios.post('http://46.101.237.138/acceptoffer/')
        axios.post('http://127.0.0.1:8000/acceptoffer/', data)
            .then(res => {
                console.log(res)
                this.setState({sold: res.data.m})
            })
            .catch(err => console.log(err))

    
    }

    render() {
        
        const { items, isLoaded } = this.state;
        let offer;
        let offerbadge;
        let acceptoffer;

        if (!isLoaded){
            return <div>Loading...</div>
        }else{
            return (
                <ul class="text-white">
                    <p class="text-center">{this.state.sold}</p>
                    {
                    items.length ?
                    items.map(data => {
                        if (data.offer_price){
                            offerbadge = (<span class="badge badge-success p-1 m-1 float-right">Offer in</span>)
                            offer = ("€ " + data.offer_price)
                            acceptoffer = (<button type="submit" class="btn-sm btn rounded-lg p-1 m-1" onClick={() => this.acceptOffer((data.offer_id +"a"), data.player_id)}>accept offer</button>)
                        }
                        else {
                            offerbadge = (null)
                            offer = (null)
                            acceptoffer = (null)
                        }
                        return (
                            <div class="shadow m-2 p-1 bg-dark rounded-lg" key={data.player_id}>
                                {offerbadge} 
                                <p class="pl-1 pt-3"><b> {data.last_name} </b> <span class="text-success float-right pr-2"> {offer}</span> </p>
                                {acceptoffer}
                                
                            </div>
                        );
                     }) : null
                    }
                </ul>
                
            );
        }
    }

}

export default TransferData;

