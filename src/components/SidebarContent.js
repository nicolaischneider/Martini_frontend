import React from 'react';
import {user} from './data/user';

function SidebarContent() {
    return (
        <div className="sidebarBox">
            <p></p> 
            <p style={{fontWeight: "bold", marginBottom: "10%"}}>{user.user_name}</p> 
            <p>budget <span> </span> {user.budget} EUR</p>
            <p>score <span> </span> {user.points}</p>

        </div>
    )
}





export default SidebarContent;
