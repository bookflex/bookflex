/**
 * Created by Joy on 2017. 4. 17..
 */
import React, {Component} from 'react';

import Rating from './Rating';
import Modal from './Modal';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.ratingNone = this.ratingNone.bind(this);
    this.ratingVisible = this.ratingVisible.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

ratingVisible(evt) {
    const rate = document.querySelector(".bestsellers");
    const target = rate.children[this.props.useKey].children[1];
    console.log(target);
    target.className = "rating"
  }

  ratingNone(evt) {
    debugger;
    const rate = document.querySelector(".bestsellers");
    const target = rate.children[this.props.useKey].children[1];
    console.log(target);
    target.className = "ratingNone"
  }
  

  render() {
    const {
      title, description, author,
      coverLargeUrl, isbn, customerReviewRank,
      priceStandard
    } = this.props.book;

    return (
      <div className="book col-md-3" >
        <div className="bookWrapper" onClick={this.handleToggleClick} onMouseOver={this.ratingVisible} onMouseOut={this.ratingNone}>
          <div className="cover">
            <div className="Img">
              <img src={coverLargeUrl} className="bookImg"/>
            </div>
            <Modal isClicked={this.state.showModal}>
              <div>
                <div className="title">
                  {title}
                </div>
                <div className="description">
                  {description}
                </div>
                <div className="image">
                  <img src={coverLargeUrl} />
                </div>
              </div>
            </Modal>
          </div>
        </div>
        <div className="ratingNone">
          <Rating bookId={isbn} bookTitle={title}/>
        </div>
      </div>
    );
  }
}
