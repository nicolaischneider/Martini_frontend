import React, {Component} from 'react';
import axios from 'axios';

class SellData extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: {},    
            isLoaded: false
        };
    }

    componentDidMount () {

        //axios.get('http://46.101.237.138/predict/')
        axios.get('http://127.0.0.1:8000/predict')
            .then(res => {
                console.log(res)
                this.setState({items: res.data.Sell, isLoaded: true})
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
                            <div class="shadow m-2 p-1 bg-dark rounded-lg">
                                <button className= "btn btn-primary btn-block">SELL</button>
                                <p>{data.first_name + " " + data.last_name}</p>
                                <p>{"price " + data.price}</p>   
                                <p>{"possible profit " + (data.price - data.market_val_purchased)}</p>   
                            </div>
                        );
                     }) : null
                    }
                </div> 
            );
        }
    }

}

export default SellData;