import React from 'react';

class Predictionsload extends React.Component {
    render(){
        return (
            <ul class="row" >
                <div class="col p-2 m-3 text-white  bg-dark rounded-lg">
                    <h2 class="text-success text-center">BUY</h2>
                    <h6 class="">Loading...</h6>
                </div>
                <div class="col p-2 m-3 text-white  bg-dark rounded-lg">
                    <h2 class="text-danger text-center">SELL</h2>
                    <h6 class="">Loading...</h6>
                    </div>
          <li>
            <div class="col bg-dark rounded-lg shadow-lg float-right ml-4 text-white " >
              <p class="form-check-inline float-right mt-1">
                <input type="checkbox" class="form-check-input" name="default" disabled/>
                <label for="complex" class="form-check-label">Default</label>
              </p>
              <p class="btn-group mt-2 btn-block">
                <button type="button" name="type" value="LOGIC_BUY" class="btn btn-success" disabled>LOGIC</button>
                <button type="button" name="type" value="ML" class="btn btn-success" disabled>ML</button>
              </p>
              <div class="bg-dark shadow-lg rounded-lg m-1 p-2">
                <span class="badge border text-success mb-1">BUY prediction</span>
                <p class="form-group">
                  <label for="days">Considered days</label>
                  <select type="number" name="considered_days" class="form-control-sm m-1 float-right" id="days" disabled>             
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </p>
                <p class="form-check-inline">
                  <input type="checkbox" class="form-check-input m-1" name="complex_eval" disabled/>
                  <label for="complex" class="m-1 form-check-label">Complex evaluation</label>
                </p>
              </div>
              <div class="bg-dark shadow-lg rounded-lg m-1 p-2">
                <span class="badge border text-danger mb-1">SELL prediction</span>
                <p class="form-group"><label for="profit">Min profit (%)</label>
                  <input type="number" id="profit" class="form-control-sm w-25 m-1 float-right" name="min_profit" placeholder="15" disabled/>
                </p>
              </div>
              <p>
                <button className= "btn btnO btn-block mt-2" style={{background: 'grey', border: 'grey'}} type="submit" disabled>Send</button>
              </p>
            </div>  
            <div class="border rounded-lg text-white mt-5 p-2">
              <ul>
                <span class="badge badge-light p-1 mr-1">GOOD</span>
                <label>This is...</label>
              </ul>
              <ul>
                <span class="badge badge-success p-1 mr-1">HIGH</span>
                <label>This is...</label>
              </ul>
              <ul>
                <span class="badge badge-success p-1 mr-1">VERY HIGH</span>
                <label>This is...</label>
              </ul>
              <ul class="mt-1">
                <span class="badge badge-success p-1 mr-1">HOLD</span>
                <label>This is...</label>
              </ul>
              <ul>
                <span class="badge badge-light p-1 mr-1">SELL</span>
                <label>This is...</label>
              </ul>
              <ul>
                <span class="badge badge-danger p-1 mr-1">SELL</span>
                <label>This is...</label>
              </ul>
            </div>
          </li>
        </ul>
     

        )
    }
}

export default Predictionsload;