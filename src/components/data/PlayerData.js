import React, { Component } from 'react';
import axios from 'axios';
import up from '../layout/up.png';
import down from '../layout/down.png';
    
class PlayerData extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: {},
            isLoaded: false,
            trend: 0
        };
    }

    componentDidMount () {

        //axios.get('http://46.101.237.138/player/')
        axios.get('http://127.0.0.1:8000/player')
            .then(res => {
                console.log(res)
                this.setState({items: res.data.player, isLoaded: true})
            });
    }

    getTrend () {
        if ((this.state.market_val - this.state.market_val_purchased) > 0 ){
            this.setState({trend: (<img src={up} alt="Up" className="trend" />)})
        }
        else {
            this.setState({trend: (<img src={down} alt="Down" className="trend" />)})
        }
    }

    render() {
        
        const { items, isLoaded } = this.state;


        if (!isLoaded){
            return <div>Loading...</div>
        }else{
            return (
                <div class="text-white shadow-light">
                    <h3 class="text-center">Team</h3>
                    {
                    items.length ?
                    items.map(data => { 
                        this.getTrend()
                        return (
                            <ul class="media bg-dark m-3 p-3 rounded-lg"> 
                                <img></img>  
                                <div class="media-body">
                                    <b>{data.first_name + " " + data.last_name}</b>
                                    <p>{data.position}</p>
                                    <p>{"marketvalue   € " + data.market_val}</p>
                                    <p>{"points " + data.points}</p>
                                </div>
                                <div class="media-body float-right">
                                    <p>{this.trend}</p>
                                    <f>marketvalue trend</f>
                                    <p>{data.market_val - data.market_val_purchased}</p>
                                    <p>{Math.trunc(((data.market_val - data.market_val_purchased)/data.market_val_purchased)*100) + "%"}</p>
                                </div>
                            </ul>
                        );
                     }) : null
                    }
                </div>
            );
        }
    }

}

export default PlayerData;

/*export const PlayerData = () => {
    return (
        <div>
            {player.map((data, key) => {
                return (
                    <div key={key} className="stats">
                        <p style={{fontWeight: "bold"}}>{ data.first_name + " " + data.last_name}</p>
                        <p>{data.position}</p>
                        <label className="trend">{data.market_val - data.market_val_purchased}</label>
                        <label className="trend">{Math.trunc(((data.market_val - data.market_val_purchased)/data.market_val_purchased)*100) + "%"}</label>
                        <p>{"Marketvalue: " + data.market_val}</p>
                        <p>{"Points: " + data.points}</p>
                    </div>
                );
            })}
        </div>

    )


}*/