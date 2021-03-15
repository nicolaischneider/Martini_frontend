import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
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
        const data = JSON.parse(localStorage.getItem('user'))
        console.log(data)
        axios.post('player/', data)
            .then(res => {
                console.log(res)
                this.setState({items: res.data.player, isLoaded: true})
            })
    }

    render() {
        
        const { items, isLoaded } = this.state;

        let trend;
        let plus;
        let procent;
        let position

        if (!isLoaded){
            return <div class="spinner-border text-success"/>
        }else{
            return (
                <div class="text-white" >
                    <h3 class="text-center">Team</h3>
                    {
                    items.length ?
                    items.map(data => { 
                        if ((data.market_val - data.market_val_purchased) > 0 ){
                            trend = (<img src={up} alt="Up" className="trend mt-3 " style={{width: '60px', height: '60px'}} />)
                            plus = ("+")
                            procent = (<span class="m-2 text-success">({plus}{Math.trunc(((data.market_val - data.market_val_purchased)/data.market_val_purchased)*100) + "%"})</span>)
                         }
                         else if ((data.market_val - data.market_val_purchased) === 0){
                            trend = ("")
                            plus = ("")
                            procent = (<span class="m-2 ">({plus}{Math.trunc(((data.market_val - data.market_val_purchased)/data.market_val_purchased)*100) + "%"})</span>)
                         }
                         else {
                            trend = (<img src={down} alt="Down" className="trend mt-3" style={{width: '60px', height: '60px'}}/>)
                            plus = ("")
                            procent = (<span class="m-2 text-danger">({plus}{Math.trunc(((data.market_val - data.market_val_purchased)/data.market_val_purchased)*100) + "%"})</span>)
                         }
                         position = data.position
                         position = position.replace("_", " ")
                        
                        return (
                            <ul class="media m-3 p-3 rounded-lg shadow-lg" style={{background: '#333'}}> 
                                <img src={data.img_path} alt="Player" className="trend w-25" /> 
                                <div class="media-body">
                                    <b>{data.first_name + " " + data.last_name}</b>
                                    <p><span class="badge badge-light p-1" > {position} </span> </p>
                                    <p>Market value <span class="float-right pr-3"><NumberFormat value={data.market_val} displayType={'text'} thousandSeparator={true} prefix="€ "/></span> </p>
                                    <l>Points <span class="float-right pr-3">{data.points}</span></l>
                                </div>
                                <div class="media-body p-3 float-right rounded-lg shadow-lg" style={{background: '#444'}}>
                                    <p><span class="badge border p-1"> Market value trend since purchased</span></p>
                                    <p>{trend}</p>
                                    <p class="m-2">{plus}<NumberFormat value={data.market_val- data.market_val_purchased} displayType={'text'} thousandSeparator={true} prefix="€ "/>
                                        {procent}
                                    </p>
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