import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(evt) {
    this.setState({username: evt.target.value, password: evt.target.value});
  }

  handleSubmit(evt) {

  }


  render() {
        return (
            <div className >
            <form>
                <label>Username: 
                    <input type="email" name="username" /> 
                </label>
                <label>Password: 
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="login" />
            </form>
            </div>
        )
    }
 }
   