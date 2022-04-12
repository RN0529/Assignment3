import React, { Component } from 'react';
import axios from 'axios';
class Data extends React.Component {
    constructor(props) {
      super(props);
      this.handleDebit = this.handleDebit.bind(this)
      this.handleCredit = this.handleCredit.bind(this)
      this.state = {
          debits : [],
          credit : [],
          selected : "debit"
        };
    }
    componentDidMount() {
        axios.get('https://moj-api.herokuapp.com/credits')
        .then(res =>{
            const data = res.data
            this.setState({credit : data})
        })
        axios.get('https://moj-api.herokuapp.com/debits')
        .then(res =>{
            const data2 = res.data
            this.setState({debits : data2})
        })
    }
  
    handleDebit() {
      this.setState({selected : "debit"});
    }
  
    handleCredit() {
      console.log(this.state.selected)
      this.setState({selected : "credit"});
      
    }

    render() {
      console.log(this.state.selected)
      if(this.state.selected==="debit"){
        return(
            <div>
              <button onClick={this.handleCredit}>View Credit</button>
              <ul>
                {
                  this.state.debits
                    .map(debits =>
                      <li style={{listStylePosition: "inside"}} key={debits.id}>{debits.description} | {debits.amount} </li>
                    )
                }
              </ul>
            </div>

        );
      }else{
        return (
          <div>
            <button onClick={this.handleDebit}>View Debit</button>
            <ul>
              {
                this.state.credit
                  .map(credit =>
                    <li style={{listStylePosition: "inside"}} key={credit.id}>{credit.description} | {credit.amount} </li>
                  )
              }
            </ul>
          </div>
    

    );
      }
     
    }
  }
  
  export default Data 