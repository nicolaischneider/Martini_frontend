import React from 'react';
import FinancesData from './../data/FinancesData';

function Finances() {
    return (
        <div className="containerFinances">
          <h2 style={{fontWeight: "bold", marginBottom: "10%", color: "white", textAlign: "center"}}> TRANSACTIONS </h2>
          <FinancesData/>
        </div>
    )
}

export default Finances;
