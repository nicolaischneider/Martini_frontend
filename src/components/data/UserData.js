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
                <div className="sidebarBox">
                    <p></p> 
                    <p style={{fontWeight: "bold", marginBottom: "10%"}}>{items.user_name}</p> 
                    <p>budget <span> </span> {items.budget} EUR</p>
                    <p>score <span> </span> {items.points}</p>

                </div>  
            );
        }
    }

}

export default UserData;
