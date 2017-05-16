import React, {Component} from 'react';
import { connect } from 'react-redux';
import action from './../actions';

class SignButton extends Component{
    SignUP() {
        console.log("sign up button component");
        const sendData = {};
        sendData.email = document.forms[0].elements[0].value;
        sendData.password = document.forms[0].elements[1].value;

        this.props.fetchLoginAjax('http://localhost:3001/login', sendData)
    }

    // fetchLoginAjax(url, sendData){
    //     const sending = JSON.stringify(sendData);

    //     var xhr = new XMLHttpRequest();
    //     xhr.open('POST', url);
    //     xhr.setRequestHeader("Content-Type", "application/json");
    //     xhr.send(sending);

    //     xhr.addEventListener("load", function(){
    //         console.log(xhr.responseText);
    //     })
    // }

    SignIN() {
        console.log("sign in button");
    }
    render(){
        return(
            <div>
                <form>
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="name" required/><br/>

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required/><br/>
                </form>
                <button onClick={this.SignUP.bind(this)}>SignUP</button>
                <button onClick={this.SignIN.bind(this)}>SignIN</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchLoginAjax: (url, sendData) => {
            dispatch(action.fetchLoginAjax(url, sendData));
        }
    }
}

export default connect(null, mapDispatchToProps)(SignButton);