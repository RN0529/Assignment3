import React, { Component } from 'react';
import axios from 'axios';
class Data extends React.Component {
    constructor(props) {
      super(props);
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
      this.setState({selected: "debit"});
    }
  
    handleCredit() {
      this.setState({selected: "credit"});
    }


    render() {
      if(this.state.selected=='debit'){
        return(
            <div>
              <button>View Credit</button>
              <ul>
                {
                  this.state.debits
                    .map(debits =>
                      <li key={debits.id}>{debits.description} | {debits.amount} </li>
                    )
                }
              </ul>
            </div>

        )
      }
      return (
            <div>
              <button>View Debit</button>
              <ul>
                {
                  this.state.credit
                    .map(credit =>
                      <li key={credit.id}>{credit.description} | {credit.amount} </li>
                    )
                }
              </ul>
            </div>
      

      );
    }
  }
  
  export default Data 