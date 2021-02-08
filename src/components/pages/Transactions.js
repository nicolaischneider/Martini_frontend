import React from 'react';
import FinancesData from '../data/FinancesData';



function Transactions() {
    return (
        <ul class="row">
          <div class="col p-2 m-3 text-white text-center bg-dark rounded-lg">
            <h2 class="">Transactions</h2>
            <h6 class="font-italic text-success">completed</h6>
            <FinancesData/>
          </div>
          <div class="col p-2 m-3 text-white text-center bg-dark rounded-lg">
            <h2 class="">Transactions</h2>
            <h6 class="font-italic text-danger">pending</h6>
          </div>
        </ul>
 
      
      
     
        
        
     

        


    )
}

export default Transactions;
