import React, { Component } from 'react';
import axios from 'axios';
    
class PlayerData extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: {},
            isLoaded: false
        };
    }

    componentDidMount () {

        axios.get('http://127.0.0.1:8000/player/')
            .then(res => {
                console.log(res)
                this.setState({items: res.data.player, isLoaded: true})
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
                                <b>{ data.first_name + " " + data.last_name}</b>
                                <p>{data.position}</p>
                                <p className="trend">{data.market_val - data.market_val_purchased}</p><br />
                                <p className="trend">{Math.trunc(((data.market_val - data.market_val_purchased)/data.market_val_purchased)*100) + "%"}</p><br />
                                <p>{"Marketvalue: " + data.market_val}</p>
                                <p>{"Points: " + data.points}</p>
                            </div>
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