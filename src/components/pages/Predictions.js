import React from 'react';

function Predictions() {
    return (
      <React.Fragment>
      
       <div className="containerPredictions"> 
        <div className="containerPredicionsPart">
           <ul class="list-group">
            <li class="list-group-item list-group-item-primary">Buy 1</li>
            <li class="list-group-item list-group-item-primary">Buy 2</li>
            <li class="list-group-item list-group-item-primary">Buy 3</li>
          </ul>
        </div>
       
        <div className="containerPredicionsPart">
          <ul class="list-group">
            <li class="list-group-item list-group-item-primary">Sell 1</li>
            <li class="list-group-item list-group-item-primary">Sell 2</li>
            <li class="list-group-item list-group-item-primary">Sell 3</li>
          </ul>
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
