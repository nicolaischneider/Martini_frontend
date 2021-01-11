import React from 'react';
import BuyData from './../data/BuyData';
import SellData from './../data/SellData';


function Predictions() {
    return (
      <React.Fragment>
      
       <div className="containerPredictions"> 
        <div className="containerPredicionsPart">
          <h2 style={{fontWeight: "bold", marginBottom: "10%", color: "red", textAlign: "center"}}> BUY </h2>
          <BuyData/>
        </div>
       
        <div className="containerPredicionsPart">
          <h2 style={{fontWeight: "bold", marginBottom: "10%", color: "green", textAlign: "center"}}> SELL </h2>
          <SellData/>
        </div> 
      </div> 

        <div className="containerPredictionsBox">
          <button className="btnP">SIMPLE</button>
          <button className="btnP">ML</button>
        
          <p>
            <label> 
              <input name="considerAge" type="checkbox"/>
              consider age
            </label>
          </p>
          <p>
            <label> 
              <input name="considerAge" type="checkbox"/>
              consider x
            </label>  
          </p>
          <p>
            <label> 
              <input name="considerAge" type="checkbox" />
              consider y
            </label>
          </p>

        </div>
    </React.Fragment>

    )
}

export default Predictions;
