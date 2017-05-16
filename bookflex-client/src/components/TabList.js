/**
 * Created by Joy on 2017. 4. 17..
 */
import React, { Component } from 'react';

import Tab from './Tab';
import SearchBar from './SearchBar';
import SignButton from './SignButton';

export default class TabList extends Component {
  onClick(evt){
    console.log(evt.target);
    
    const form = document.querySelector(".signFormshow")
    const display = form.getAttribute("style");

    //1번 방법
    if(!display){
      form.setAttribute("style", "display:block");
    } else{
      const status = display.replace(/display:(\w+)$/,'$1');
      if(status === "block"){
        form.setAttribute("style", "display:none");
      }else{
        form.setAttribute("style", "display:block");
      }
    }
    return( <div> hello world </div>);
    
    //2번 방법 (안됨, state값을 변경해야 하는 것 같음)
    // if(form.className === "signFormshow"){
    //   form.className = "signFormnone"
    // }else{
    //   form.className = "signFormshow"
    // }
  }
  
  render() {
    
    return (
      <div className="tabList">
        <Tab link="/" name="Main" />
        <Tab link="/recommendations" name="Recommendations"/>
        <SearchBar />
        <div className="signinout" onClick={this.onClick.bind(this)}> SIGNIN/OUT </div>
        
        <div className="signFormshow">
          {/*<form>
          <input type="text" placeholder="ID"/>
          <input type="text" placeholder="PW"/>
          <button> submit </button>
          </form>*/}
          {/*<form>
                        <input type="text" placeholder="Enter Username" name="name" required />
                        <input type="password" placeholder="Enter Password" name="password" required />
                        <button type="submit">SignUP</button>
                        <button type="submit">SignIN</button>
                </form>*/}
        </div>
        <SignButton className="signFormshow" />
      </div>
    );
  }
}