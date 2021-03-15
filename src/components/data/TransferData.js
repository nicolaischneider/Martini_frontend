import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import axios from 'axios';

class TransferData extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: {},
            isLoaded: false, 
        }
    }

    componentDidMount () {
        this.getOffers();   
    }

    getOffers = async () => {

        console.log("transfer")
        console.log(JSON.parse(localStorage.getItem('user')))

        axios.post ('offers/', JSON.parse(localStorage.getItem('user')))
            .then(res => {
                console.log(res)
                this.setState({items: res.data.offers, isLoaded: true})
            })   
    }

    acceptOffer = async (offer_id, player_id) => {
        
        let userdata = JSON.parse(localStorage.getItem('user'))
        const data = {
            LOGIN: {
                email: userdata["LOGIN"]["email"],
                pw: userdata["LOGIN"]["pw"]
              },
            offer_id: offer_id,
            player_id: player_id
        }
        
        axios.post('acceptoffer/', data)
            .then(res => {
                console.log(res)
                this.setState({sold: res.data.m})
            })
            .catch(err => console.log(err))
  
        setTimeout(() => {this.getOffers()}, 3000)
    }

    render() {
        
        const { items, isLoaded } = this.state;
        let offer;
        let offerbadge;
        let acceptoffer;

        if (!isLoaded){
            return <div class="spinner-border text-success"/>
        }else{
            return (
                <ul class="text-white">
                    {
                    items.length ?
                    items.map(data => {
                        if (data.offer_price){
                            offerbadge = (<span class="badge badge-light p-1 m-1 float-right">Offer in</span>)
                            offer = ("€ " + data.offer_price)
                            acceptoffer = (<button type="submit" class="btn-sm btn btn-success rounded-lg p-1 m-1" onClick={() => this.acceptOffer(data.offer_id, data.player_id)}>accept offer</button>)
                        }
                        else {
                            offerbadge = (null)
                            offer = (null)
                            acceptoffer = (null)
                        }
                        return (
                            <div class="shadow m-2 p-1 rounded-lg" key={data.player_id} style={{background: '#444'}}>
                                {offerbadge} 
                                <p class="pl-1 pt-3"><b> {data.last_name} </b> <span class="text-success float-right pr-2"> <NumberFormat value={offer} displayType={'text'} thousandSeparator={true} prefix="€ "/></span> </p>
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