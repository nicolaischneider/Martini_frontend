import React from 'react';
import {player} from "./player";

export const PlayerData = () => {
    return (
        <div>
            {player.map((data, key) => {
                return (
                    <div key={key}>
                        {data.first_name + " " + data.last_name}
                    </div>
                );
            })}
        </div>

    )


}