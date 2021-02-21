import React from 'react';

class Predictionsload extends React.Component {
    render(){
        return (
          <ul class="row" >
            <div class="col-sm-4 p-2 ml-2 mb-2 text-white rounded-lg" style={{background: '#333'}}>
              <h2 class="text-success text-center">BUY</h2>
                  <div class="spinner-border text-success ml-3"/>
            </div>
            <div class="col-sm-4 p-2 ml-2 mb-2 text-white rounded-lg" style={{background: '#333'}}>
              <h2 class="text-danger text-center">SELL</h2>
                  <div class="spinner-border text-danger ml-3"/>
            </div>
            <div class="col-sm rounded-lg shadow-lg float-right ml-4 text-white" style={{background: '#333'}}>
              <p class="form-check-inline float-right mt-1">
                <input type="checkbox" class="form-check-input"  name="default" disabled/>
                <label for="complex" class="form-check-label">Default</label>
              </p>
              <p class="btn-group mt-2 btn-block">
                <button type="button" name="LOGIC_BUY"  class="btn btn-success" disabled>LOGIC</button>
                <button type="button" name="ML"  class="btn btn-success" disabled>ML</button>
              </p>
              <div class="shadow-lg rounded-lg m-1 p-2" style={{background: '#333'}}>
                <span class="badge border text-success mb-1">BUY prediction</span>
                <p class="form-group">
                  <label for="days">Considered days</label>
                  <select type="number" name="considered_days" class="form-control-sm m-1 float-right" defaultValue="3" id="days" disabled>             
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </p>
                <p class="form-check-inline">
                  <input type="checkbox" class="form-check-input m-1"  name="complex_eval" disabled/>
                  <label for="complex" class="m-1 form-check-label">Complex evaluation</label>
                </p>
              </div>
              <div class="shadow-lg rounded-lg m-1 p-2" style={{background: '#333'}}>
                <span class="badge border text-danger mb-1">SELL prediction</span>
                <p class="form-group"><label for="profit">Min profit (%)</label>
                  <input type="number" min={1} id="profit" class="form-control-sm w-25 m-1 float-right" name="min_profit" placeholder="15" disabled/>
                </p>
              </div>
              <p>
                <button className= "btn btnO btn-block mt-2" style={{background: 'grey', border: 'grey'}} type="submit" disabled>Send</button>
              </p>
            </div>  
            <div class="float-right rounded-lg w-50 text-white mt-5 p-2" style={{background: '#333'}}>
            <label>The following badges are supposed to help you with your buy and sell decision by indicating the forecasted market value trend.</label>
            <div class="m-2 p-1 rounded-lg shadow-lg" style={{background: '#444'}}>
              <ul class="media">
                <span class="badge badge-light p-1 mr-1">GOOD</span>
                <div class="media-body">
                  <label>Slight increase of marketvalue expected.</label>
                </div>
              </ul>
              <ul class="media">
                <span class="badge badge-success p-1 mr-1">HIGH</span>
                <div class="media-body">
                  <label>Decent increase of marketvalue expected.</label>
                </div>
              </ul>
              <ul class="media">
                <span class="badge badge-success p-1 mr-1">VERY HIGH</span>
                <div class="media-body">
                  <label>Must buy!</label>
                </div>
              </ul>
              </div> 
              <div class="m-2 p-1 rounded-lg shadow-lg" style={{background: '#444'}}>
              <ul class="media mt-1">
                <span class="badge badge-success p-1 mr-1">HOLD</span>
                <div class="media-body">
                  <label>Marketvalue expected to increase. Consider holding player a while longer.</label>
                </div>
              </ul>
              <ul class="media"> 
                <span class="badge badge-light p-1 mr-1">SELL</span>
                <div class="media-body">
                  <label>No major marketvalue change expected. Your decision!</label>
                </div>
              </ul>
              <ul class="media">
                <span class="badge badge-danger p-1 mr-1">SELL</span>
                <div class="media-body">
                  <label>Decrease of marketvalue expected. Must sell!</label>
                </div>
              </ul>
              </div>
            </div>
         
        </ul>
      
     

        )
    }
}

export default Predictionsload;