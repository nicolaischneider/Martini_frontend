import React from 'react';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import Predictionsload from './Predictionsload';

class Predictions extends React.Component {
    state = {
      buy:{},
      isLoadedBuy: false,
      sell: {},
      isLoadedSell: false,
      type:"LOGIC_BUY",
      default: true,
      complex_eval: false,
      considered_days: 3,
      min_profit: 15,
  
  }

  handleChange = (e) => {
      const {name,value} = e.target
      this.setState({[name]: parseInt(value)})
  }

  handleButton = (name) => {
    this.setState({type: name})
  }

  handleCheckbox = () => {
    this.setState({complex_eval: !this.state.complex_eval})
    console.log("checkbox " + this.state.complex_eval)
  }

  handleDefault = () => {
    this.setState({default: !this.state.default})
    console.log("default " + this.state.default)
  }

  handleSubmit = async(e) => {
    e.preventDefault()
      let userdata = JSON.parse(localStorage.getItem('user'))
      const data = {
        userdata,
        BUY: {
          type: this.state.type,
          default: this.state.default,
          complex_eval: this.state.complex_eval,
          considered_days: this.state.considered_days,
        }, 
        SELL: {
          default: this.state.default,
          min_profit: this.state.min_profit
        }
      }
      console.log(data)
      this.setState({
        isLoadedSell: false,
        isLoadedBuy: false
      })

      axios.post ('http://46.101.237.138/predict/', data)
        .then( res => {
          console.log(res)
          this.setState({buy: res.data.Buy, isLoadedBuy: true})
          console.log("neue buy im state")
          this.setState({sell: res.data.Sell, isLoadedSell: true})
          console.log("neue daten im state")
        })
        .catch(err => {
            console.log(err)
        })
      
      /*axios.post('http://127.0.0.1:8000/predict/', data)
          .then( res => {
              console.log(res)
              this.setState({buy: res.data.Buy, isLoadedBuy: true})
              console.log("neue buy im state")
              this.setState({sell: res.data.Sell, isLoadedSell: true})
              console.log("neue daten im state")
          })
          .catch(err => {
              console.log(err)
          })*/

     
      }

  handleTrade = async(tradetype, player_id, price) => {
    let userdata = JSON.parse(localStorage.getItem('user'))
    const trade = {
      userdata,
      type: tradetype,
      player_id: player_id,
      price: price
    }
    console.log(trade)

    axios.post ('http://46.101.237.138/trade/', trade)
     .then( res => {
            console.log(res)
         
        })
        .catch(err => {
            console.log(err)
        })
    
    /*axios.post('http://127.0.0.1:8000/trade/', trade)
        .then( res => {
            console.log(res)
         
        })
        .catch(err => {
            console.log(err)
        })*/
    
    setTimeout(() => {this.getPrediction()}, 3000)

  }


  getPrediction = async () => {
    const data = JSON.parse(localStorage.getItem('user'))
    console.log(data, "geparsed")
    axios.post ('http://46.101.237.138/predict/', data)
      .then(res => {
        console.log(res)
        this.setState({buy: res.data.Buy, isLoadedBuy: true})
        this.setState({sell: res.data.Sell, isLoadedSell: true})
      })

    /*axios.get('http://127.0.0.1:8000/predict/')
    .then(res => {
        console.log(res)
        this.setState({buy: res.data.Buy, isLoadedBuy: true})
        this.setState({sell: res.data.Sell, isLoadedSell: true})
    });*/
  }
  
  componentDidMount () {
    this.getPrediction();
  }

        
  
  
  render () {

    const { buy, sell, isLoadedBuy, isLoadedSell } = this.state;
    let recSell;
    let recBuy;

    if (!isLoadedBuy | !isLoadedSell){
        return (
          <Predictionsload/>
        )
    }else{
    return (
      <form onSubmit={this.handleSubmit}>
        <ul class="row" >
          <div class="col-sm-4 p-2 ml-2 mb-2 text-white rounded-lg" style={{background: '#333'}}>
            <h2 class="text-success text-center">BUY</h2>
            <div>
              
                    {
                    buy.length ?    
                    buy.map(data => {
                      if (data.analysis){
                        if (data.analysis === 1){
                          recBuy = (<span class="badge badge-light p-1">GOOD</span>)
                        }
                        else if (data.analysis === 2){
                          recBuy = (<span class="badge badge-success p-1">HIGH</span>)
                        }
                        else if (data.analysis === 3){
                          recBuy = (<span class="badge badge-success p-1">VERY HIGH</span>)
                        }
                      }
                      else {
                        recBuy = ("")
                      }
                        return (
                            <div class="shadow m-2 p-2 rounded-lg" key={data.player_id} style={{background: '#444'}}>
                                <div class="float-right">{recBuy}</div>
                                <p><b>{data.first_name + " " + data.last_name}</b></p>
                                <p>Price 
                                  <button className="btn btn-success float-right m-1" type="submit" name="BUY" 
                                    onClick={() => this.handleTrade("BUY", data.player_id, data.price)}>BUY</button>
                                  <p><NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} prefix="€ "/></p>
                                </p>  
                                
                            </div>
                        );
                     }) : null
                    }
                </div>
          </div>
          <div class="col-sm-4 p-2 ml-2 mb-2 text-white rounded-lg" style={{background: '#333'}}>
            <h2 class="text-danger text-center">SELL</h2>
            <div>
              
                    {
                    sell.length ?
                    sell.map(data => {
                      if (data.analysis){
                        if (data.analysis === -1){
                          recSell = ("")
                        }
                        else if (data.analysis === 1){
                          recSell = (<span class="badge badge-danger p-1">SELL</span>)
                        }
                        else if (data.analysis === 2){
                          recSell = (<span class="badge badge-light p-1">SELL</span>)
                        }
                        else if (data.analysis === 3){
                          recSell = (<span class="badge badge-success p-1">HOLD</span>)
                        }
                      }
                      else {
                        recSell = ("")
                      }
                        return (
                            <div class="shadow m-2 p-2 rounded-lg" key={data.player_id} style={{background: '#444'}}>
                                <div class="float-right">{recSell}</div>
                                <p><b>{data.first_name + " " + data.last_name}</b></p> 
                                <p>Possible profit
                                  <button className= "btn btnO btn-danger m-1 float-right" type="submit" name="SELL" 
                                    onClick={() => this.handleTrade("SELL", data.player_id, 0)}>SELL</button>
                                  <p><NumberFormat value={data.profit} displayType={'text'} thousandSeparator={true} prefix="€ "/></p>  
                                </p>
                                
                            </div>
                        );
                     }) : null
                    }
                </div> 
          </div>
        
            <div class="col-sm rounded-lg shadow-lg float-right ml-4 text-white h-25" onSubmit={this.handleSubmit} style={{background: '#333'}}>
              <p class="form-check-inline float-right mt-1">
                <input type="checkbox" class="form-check-input" defaultChecked={this.state.default} name="default" onChange={this.handleDefault}/>
                <label for="complex" class="form-check-label">Default</label>
              </p>
              <p class="btn-group mt-2 btn-block">
                <button type="button" name="LOGIC_BUY"  class="btn btn-success" disabled={this.state.default} defaultChecked={this.state.type} onClick={() => this.handleButton("LOGIC_BUY")} >LOGIC</button>
                <button type="button" name="ML"  class="btn btn-success" disabled={this.state.default} onClick={() => this.handleButton("ML")}>ML</button>
              </p>
              <div class="shadow-lg rounded-lg m-1 p-2" style={{background: '#333'}}>
                <span class="badge border text-success mb-1">BUY prediction</span>
                <p class="form-group">
                  <label for="days">Considered days</label>
                  <select type="number" name="considered_days" class="form-control-sm m-1 float-right" defaultValue="3" id="days" disabled={this.state.default} onChange={this.handleChange}>             
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </p>
                <p class="form-check-inline">
                  <input type="checkbox" class="form-check-input m-1" defaultChecked={this.state.complex_eval} disabled={this.state.default} name="complex_eval" onChange={this.handleCheckbox}/>
                  <label for="complex" class="m-1 form-check-label">Extended evaluation</label>
                </p>
              </div>
              <div class="shadow-lg rounded-lg m-1 p-2" style={{background: '#333'}}>
                <span class="badge border text-danger mb-1">SELL prediction</span>
                <p class="form-group"><label for="profit">Min profit (%)</label>
                  <input type="number" min={1} id="profit" class="form-control-sm w-25 m-1 float-right" name="min_profit" placeholder="15" disabled={this.state.default} onChange={this.handleChange}/>
                </p>
              </div>
              <p>
                <button className= "btn btnO btn-block mt-2" style={{background: 'grey', border: 'grey'}} type="submit" disabled={this.state.default} onSubmit={this.handleSubmit}>Send</button>
              </p>
            </div>  
            <div class="float-right rounded-lg w-50 text-white mt-5 p-2" style={{background: '#333'}}>
            <label>The following badges are supposed to help you with your buy and sell decision by indicating the forecasted market value trend.</label>
            <div class="m-2 p-1 rounded-lg shadow-lg" style={{background: '#444'}}>
              <ul class="media">
                <span class="badge badge-light p-1 mr-1">GOOD</span>
                <div class="media-body">
                  <label>Slight increase of market value expected.</label>
                </div>
              </ul>
              <ul class="media">
                <span class="badge badge-success p-1 mr-1">HIGH</span>
                <div class="media-body">
                  <label>Decent increase of market value expected.</label>
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
                  <label>Market value expected to increase. Consider holding player a while longer.</label>
                </div>
              </ul>
              <ul class="media"> 
                <span class="badge badge-light p-1 mr-1">SELL</span>
                <div class="media-body">
                  <label>No major market value change expected. Your decision!</label>
                </div>
              </ul>
              <ul class="media">
                <span class="badge badge-danger p-1 mr-1">SELL</span>
                <div class="media-body">
                  <label>Decrease of market value expected. Must sell!</label>
                </div>
              </ul>
              </div>
            </div>
         
        </ul>
      </form> 
      
      
     
        
        
     

        


    )
  }
}}


export default Predictions;
