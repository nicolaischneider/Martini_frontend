import React, {Component} from 'react';
import FinancesData from '../data/FinancesData';
import TransferData from '../data/TransferData';



class Transactions extends React.Component {
    render () {
    return (
        <ul class="row">
          <div class="col p-2 m-3 text-white rounded-lg" style={{background: '#333'}}>
            <h2 class="text-center">Transactions</h2>
            <h6 class="font-italic text-success text-center">completed</h6>
            <FinancesData/>
          </div>
          <div class="col p-2 m-3 text-white rounded-lg" style={{background: '#333'}}>
            <h2 class="text-center">Transactions</h2>
            <h6 class="font-italic text-danger text-center">pending</h6>
            <TransferData/>
          </div>
        </ul>


    )
}
}


export default Transactions;
