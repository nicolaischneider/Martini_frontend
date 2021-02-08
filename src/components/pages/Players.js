import React from 'react';
import PropTypes from 'prop-types';
import PlayerData from './../data/PlayerData';

function Players() {
  
    
    return(
           <form>
               <h3>Team</h3>
           
                <div className="containerPlayers">
                    <PlayerData/>
                </div>
            </form>
        )
        ;
    } 


// PropTypes
/*Players.propTypes = {
    players: PropTypes.array.isRequired,

}*/

export default Players;