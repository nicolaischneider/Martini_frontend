import React from 'react';
import PropTypes from 'prop-types';
import {PlayerData} from './../data/PlayerData';

function Players() {
        return(
           
            <div className="containerPlayers">
                <PlayerData/>
            </div>
        
        )
        ;
    } 


// PropTypes
Players.propTypes = {
    players: PropTypes.array.isRequired,
 
}

export default Players;