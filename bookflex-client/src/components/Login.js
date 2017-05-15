/**
 * Created by Joy on 2017. 5. 15..
 */
import React, {Component} from 'react';

export default class Login extends Component {
  onClickLogin() {
    const { email, password } = this.props.refs;

    if(!email || !password) {
      //redirect login
    }
  }
  onClickRegister() {
    const { email, password } = this.props.refs;

    if(!email || !password) {
      //redirect login
    }
  }
  render() {
    return(
      <section className="container">
        <form className="form-wrapper">
          <h1>BookFlex</h1>
          <input ref="email" type="email" placeholder="Email" required />
          <input ref="password" type="password" placeholder="Password" required />
          <input type="submit" value="Login" className="btn-login" onClick={this.onClickLogin.bind(this)}/>
          <input type="submit" value="Register" className="btn-register" onClick={this.onClickRegister.bind(this)}/>
          <a href="#">Lost your password?</a>
        </form>
      </section>
    );
  }
}