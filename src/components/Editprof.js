import React, { Component } from 'react';
import axios from 'axios';
import Welcome from './Welcomeuser';

class Edit extends React.Component {
    constructor(props) {
      super(props);
      this.handleChangeOpen = this.handleChangeOpen.bind(this)
      this.handleChangeClose = this.handleChangeClose.bind(this)
      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleColorChange = this.handleColorChange.bind(this)
      this.handleTextColorChange = this.handleTextColorChange.bind(this)
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
    handleNameChange(props){
        props.preventDefault();
        console.log(props.target.name.value)
        this.setState({userName : props.target.name.value})
        console.log(this.state.userName)
        this.handleChangeClose()
    }
    handleColorChange(props){
        props.preventDefault();
        console.log(props.target.color.value)
        document.body.style.backgroundColor = props.target.color.value
        this.handleChangeClose()
    }
    handleTextColorChange(props){
        props.preventDefault();
        console.log(props.target.color.value)
        document.body.style.color = props.target.color.value
        this.handleChangeClose()
    }
    

    render() {
      console.log(this.state.selected)
      if(this.state.selected===true){
        return(
            
            <div >
                <p>The changes will only happen one at a time</p>
                <p>The hex values must have a # before the numbers! :)</p>
                <form onSubmit={this.handleNameChange}>
                    <label>
                        Change Username: 
                        <input type="text" name="name" />
                    </label>
                    <button type="submit">Change</button>
                    
                </form>
                <form onSubmit={this.handleColorChange}>
                    <label>
                        ChangeBackgroundColor: 
                        <input type="text" name="color" />
                    </label>
                    <button type="submit">Change</button>
                    
                </form>
                <form onSubmit={this.handleTextColorChange}>
                    <label>
                        ChangeTextColor: 
                        <input type="text" name="color" />
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