/**
 * Created by Joy on 2017. 5. 15..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import { registerUser, confirmUser } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onChangeEmail(evt) {
    this.setState({
      email: evt.target.value
    });
  }

  onChangePassword(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  onClickLogin() {
    const { email, password } = this.state;

    if(!email || !password) {
      //redirect login
    }
    this.props.confirmUser(email, password);
  }
  onClickRegister() {
    const { email, password } = this.state;

    if(!email || !password) {
      //redirect login
    }
    this.props.registerUser(email, password);
  }
  render() {
    return(
      <section className="container">
        <form className="form-wrapper">
          <h1>BookFlex</h1>
          <input type="email" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} required />
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} required />
          <input type="button" value="Login" className="btn-login" onClick={this.onClickLogin.bind(this)} onKeyDown={this.onClickLogin.bind(this)}/>
          <input type="button" value="Register" className="btn-register" onClick={this.onClickRegister.bind(this)}/>
          <a href="#">Lost your password?</a>
        </form>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (email, password) => {
      dispatch(registerUser(email, password));
    },
    confirmUser: (email, password) => {
      dispatch(confirmUser(email, password));
    }
  };
}

export default connect(null, mapDispatchToProps)(Login);