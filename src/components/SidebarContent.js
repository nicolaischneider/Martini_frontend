import React from 'react';
import {user} from './data/user';

function SidebarContent() {
    return (
        <div className="sidebarBox">
            <p style= {sidebarStyle}></p> 
            <p style= {sidebarStyle}>{user.user_name}</p> 
            <p style= {sidebarStyle}>BUDGET | {user.budget} EUR</p>
            <p style= {sidebarStyle}>SCORE | {user.points}</p>

        </div>
    )
}

const sidebarStyle = {
    padding: '10px',
    background: '#111',
    color: "white"
}


export default SidebarContent;
