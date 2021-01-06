import React from 'react';
import {transaction} from "./transaction";

export const FinancesData = () => {
    return (
        <div>
            {transaction.map((data, key) => {
                return (
                    <div key={key} className="stats">
                        {data.transaction_type + " | " + data.traded_player_name}
                    </div>
                );
            })}
        </div>

    )


}