import React, { Component } from 'react';
import axios from 'axios';

class UserData extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: {},
            isLoaded: false
        };
    }

    componentDidMount () {

        //axios.get('http://46.101.237.138/userstats/')
        axios.get('http://127.0.0.1:8000/userstats/')
            .then(res => {
                console.log(res)
                this.setState({items: res.data, isLoaded: true})
            });
    }

    render() {
        
        const { items, isLoaded } = this.state;

        if (!isLoaded){
            return <div>Loading...</div>
        }else{
            return (
                <div className="col p-3 text-white bg-dark rounded-lg shadow-lg">
                    <p><b>{items.user_name}</b></p>
                    <p>budget <b class="float-right">  € {items.budget}  </b></p>
                    <p>score <b class="float-right"> {items.points} </b></p>  
                </div>  
            );
        }
    }

}

export default UserData;
