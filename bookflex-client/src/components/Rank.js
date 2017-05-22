/**
 * Created by hwigyum on 2017. 4. 27..
 */
import React, {Component} from 'react';
//import {connect} from 'react-redux';

export default class Rank extends Component {
  componentDidMount() {
    let temp = document.querySelectorAll(".rankNumber");
    temp.forEach(function(v, i, a){
	    if(parseInt(v.innerText) < 4){
		    v.className += " rankWhite";}
	    }
    );
  }
  
  render() {
    const {title, link, rank} = this.props.bestseller;

    return (
      <div className="rank">
        <li><span className="rankRectangle"> </span><span className="rankNumber">{rank}</span><a className="rankTitle" target="_blank" href={link}>{title}</a></li>
      </div>
    );
  }
}