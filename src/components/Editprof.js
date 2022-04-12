import React, { Component } from 'react';
import axios from 'axios';
import Welcome from './Welcomeuser';

class Edit extends React.Component {
    constructor(props) {
      super(props);
      this.handleChangeOpen = this.handleChangeOpen.bind(this)
      this.handleChangeClose = this.handleChangeClose.bind(this)
      this.handleAllChange = this.handleAllChange.bind(this)
      this.state = {
         selected : false,
         userName : "UserName"
        };
    }


    handleChangeOpen() {
        this.setState({selected : true})
    }
  
    handleChangeClose() {
        this.setState({selected : false})
    }
    handleAllChange(props){
        props.preventDefault();
        this.setState({userName : props.target.name.value})
        document.body.style.backgroundColor = props.target.color.value
        document.body.style.color = props.target.color2.value
        this.handleChangeClose()
    }

    render() {
      console.log(this.state.selected)
      if(this.state.selected===true){
        return(
            
            <div >

                <p>The hex values must have a # before the numbers! :)</p>

                <form onSubmit={this.handleAllChange}>
                    <label>
                        Change Username: 
                        <input type="text" name="name" />
                    </label>
                    <label>
                        ChangeBackgroundColor: 
                        <input type="text" name="color" />
                    </label>
                    <label>
                        ChangeTextColor: 
                        <input type="text" name="color2" />
                    </label>
                    <button type="submit">Change</button>
                </form>
               
                <Welcome userName={this.state.userName}/>
                <button onClick={this.handleChangeClose}>Edit Profile</button>
            </div>
        );
      }else{
        return (
            <div>
                <Welcome userName={this.state.userName}/>
                <button onClick={this.handleChangeOpen}>Edit Profile</button>
            </div>
        );
      }
     
    }
  }
  
  export default Edit 