import React from 'react';
import BuyData from './../data/BuyData';
import SellData from './../data/SellData';


function Predictions() {
    return (
        <ul class="row">
          <div class="col-sm-4 p-2 m-3 text-white text-center bg-dark rounded-lg">
            <h2 class="text-success">BUY</h2>
            <BuyData/>
          </div>
          <div class="col-sm-4 p-2 m-3 text-white text-center bg-dark rounded-lg">
            <h2 class="text-danger">SELL</h2>
            <SellData/>
          </div>
          <div class="btn-group mt-3 w-25 h-25 float-right">
            <button type="button" class="btn btn-success">SIMPLE</button>
            <button type="button" class="btn btn-success">ML</button>
          </div>
        </ul>
 
      
      
     
        
        
     

        


    )
}

export default Predictions;
