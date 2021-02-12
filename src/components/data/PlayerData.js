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
        };
    }

    componentDidMount () {

        //axios.get('http://46.101.237.138/player/')
        axios.get('http://127.0.0.1:8000/player/')
            .then(res => {
                console.log(res)
                this.setState({items: res.data.player, isLoaded: true})
            });
    }


    render() {
        
        const { items, isLoaded } = this.state;

        let trend;
        let plus;

        if (!isLoaded){
            return <div>Loading...</div>
        }else{
            return (
                <div class="text-white" >
                    <h3 class="text-center">Team</h3>
                    {
                    items.length ?
                    items.map(data => { 
                        if ((data.market_val - data.market_val_purchased) > 0 ){
                            trend = (<img src={up} alt="Up" className="trend mt-3" />)
                            plus = ("+")
                         }
                         else {
                            trend = (<img src={down} alt="Down" className="trend mt-3" />)
                            plus = ("")
                         }
                        return (
                            <ul class="media bg-dark m-3 p-3 rounded-lg shadow-lg"> 
                                <img src={data.img_path} alt="Player" className="trend w-25" /> 
                                <div class="media-body">
                                    <b>{data.first_name + " " + data.last_name}</b>
                                    <p><span class="badge badge-light p-1"> {data.position} </span> </p>
                                    <p>{"marketvalue   € " + data.market_val}</p>
                                    <l>{"points " + data.points}</l>
                                </div>
                                <div class="media-body p-3 float-right rounded-lg shadow-lg">
                                    <p>{trend}</p>
                                    <p><span class="badge border p-1"> marketvalue trend </span></p>
                                    <p class="m-2">{plus}{data.market_val - data.market_val_purchased}</p>
                                    <l class="m-2">{plus}{Math.trunc(((data.market_val - data.market_val_purchased)/data.market_val_purchased)*100) + "%"}</l>
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