import React from 'react';
import {buy} from "./prediction";
import {sell} from "./prediction";

export const BuyData = () => {
    return (
        <div>
            {buy.map((data, key) => {
                return (
                    <div key={key} className="stats">
                       <p style={{fontWeight: "bold"}}>{data.first_name + " " + data.last_name}</p>
                       <button className="btnTrade">BUY</button>
                       <p>{"Price: " + data.price}</p>   
                    </div>
                );
            })}
        </div>

    )
}

export const SellData = () => {
    return (
        <div>
            {sell.map((data, key) => {
                return (
                    <div key={key} className="stats">
                        <p style={{fontWeight: "bold"}}>{data.first_name + " " + data.last_name}</p>
                        <button className="btnTrade">SELL</button>
                        <p>{"Price: " + data.price}</p> 
                    </div>
                );
            })}
        </div>

    )
}