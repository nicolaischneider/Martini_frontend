import React from 'react';
import {transaction} from "./transaction";

export const FinancesData = () => {
    return (
        <div>
            {transaction.map((data, key) => {
                return (
                    <div key={key} className="stats">
                        {data.traded_player_name + " " + data.transaction_type + " " + data.value }
                    </div>
                );
            })}
        </div>

    )


}