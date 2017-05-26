/**
 * Created by Joy on 2017. 5. 6..
 */
import React, {Component} from 'react';

export default class Modal extends Component {
  render() {
    if(!this.props.show){
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
          {this.props.children}
          <div className="footer">
            <button onClick={this.props.closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>  
    )
  }
}






  /*consturctor(props) {
    super(props)
    this.state = { isModalOpen: false }
    
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState = { isModalOpen: true }
  }

  closeModal() {
    this.setState = { isModalOpen: false }
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }



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
}*/