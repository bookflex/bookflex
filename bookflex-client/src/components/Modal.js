/**
 * Created by Joy on 2017. 5. 6..
 */
import React, {Component} from 'react';

export default class Modal extends Component {
  render() {
    if(!this.props.isClicked) {
      return null;
    }

    return (
      <div className="modal">
        {this.props.children}
      </div>
    );
  }
}