import React, {Component} from 'react';
import axios from 'axios';

class BuyData extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: {},    
            isLoaded: false
        };
    }

    componentDidMount () {

        axios.get('http://127.0.0.1:8000/predict/')
            .then(res => {
                console.log(res)
                this.setState({items: res.data.Buy, isLoaded: true})
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
                            <p style={{fontWeight: "bold"}}>{data.first_name + " " + data.last_name}</p>
                            <button className="btnTrade">BUY</button>
                            <p>{"Price: " + data.price}</p>   
                            </div>
                        );
                     }) : null
                    }
                </div>  
            );
        }
    }

}

export default BuyData;