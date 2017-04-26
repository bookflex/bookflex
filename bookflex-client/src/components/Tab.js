/**
 * Created by Joy on 2017. 4. 18..
 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Tab extends Component {
  render() {
    return (
      <div className="tab">
        <Link to={this.props.link}>{this.props.name}</Link>
      </div>
    );
  }
}
