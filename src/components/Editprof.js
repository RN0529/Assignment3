import React, { Component } from 'react';
import axios from 'axios';
class Edit extends React.Component {
    constructor(props) {
      super(props);
      this.handleChangeOpen = this.handleChangeOpen.bind(this)
      this.handleChangeClose = this.handleChangeClose.bind(this)
      this.state = {
         selected : false
        };
    }

  
    handleChangeOpen() {
        this.setState({selected : true})
    }
  
    handleChangeClose() {
        this.setState({selected : false})
    }

    render() {
      console.log(this.state.selected)
      if(this.state.selected===true){
        return(
            
            <div>
                <h1>pog!</h1>
                <button onClick={this.handleChangeClose}>Edit Profile</button>
            </div>
        );
      }else{
        return (
            <div>
                <button onClick={this.handleChangeOpen}>Edit Profile</button>
            </div>
        );
      }
     
    }
  }
  
  export default Edit 