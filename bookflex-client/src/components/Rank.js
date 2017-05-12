/**
 * Created by hwigyum on 2017. 4. 27..
 */
import React, {Component} from 'react';
//import {connect} from 'react-redux';

export default class Rank extends Component {
  render() {
    const {title, link} = this.props.bestseller;

    return (
      <div className="rank">
        <li><a href={link}>{title}</a></li>
      </div>
    );
  }
}