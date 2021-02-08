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

        //axios.get('http://46.101.237.138/predict/')
        axios.get('http://127.0.0.1:8000/predict')
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
                            <div class="shadow m-2 p-1 bg-dark rounded-lg">
                                <p><button class="btn btn-success p-1 m-1 float-right">BUY</button></p>
                                <p><b>{data.first_name + " " + data.last_name}</b></p>
                                <p>{"price " + data.price}</p>   
                                
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