import React, { Component } from 'react';
class Welcome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {userName : "User Name"};
    }
    componentDidMount() {
        this.state = {userName : "User Name"};
    }
  
    componentWillUnmount() {

    } 
    render() {
      return (
        <div>
          <h1>Welcome,</h1>
          <h2>{this.state.userName}</h2>
          <h2>Thank you for using, Bank of React</h2>
        </div>
      );
    }
  }
  
  export default Welcome 