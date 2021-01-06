import React from 'react';
import {player} from "./player";

export const PlayerData = () => {
    return (
        <div>
            {player.map((data, key) => {
                return (
                    <div key={key} className="stats">
                        {data.first_name + " " + data.last_name + " | " + data.position}
                        <p>{"Marketvalue: " + data.market_val}</p>
                        <p>{"Points: " + data.points}</p>
                    </div>
                );
            })}
        </div>

    )


}