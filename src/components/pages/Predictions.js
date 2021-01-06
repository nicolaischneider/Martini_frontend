import React from 'react';
import {BuyData} from './../data/PredictionData';
import {SellData} from './../data/PredictionData';

function Predictions() {
    return (
      <React.Fragment>
      
       <div className="containerPredictions"> 
        <div className="containerPredicionsPart">
          <BuyData/>
        </div>
       
        <div className="containerPredicionsPart">
          <SellData/>
        </div> 
      </div> 

        <div className="containerPredictionsBox">
          <button className="btnP">SIMPLE</button>
          <button className="btnP">ML</button>
          <br/>
          <br/>
          <label> 
            <input name="considerAge" type="checkbox"/>
            consider age
          </label>
          <br/>
          <label> 
            <input name="considerAge" type="checkbox"/>
            consider x
          </label>  
          <br/>
          <label> 
            <input name="considerAge" type="checkbox" />
            consider y
          </label>

        </div>
    </React.Fragment>

    )
}

export default Predictions;
