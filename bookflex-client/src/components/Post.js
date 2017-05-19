/**
 * Created by Woosikoosi on 2017. 4. 28.
 */

import React, { Component } from 'react';

class Post extends Component {
    render() {
        
        return (
            <div className="posts">
            <div className="posts-left">
                <img className="post-img" src={this.props.postImg} alt="primary" />
            </div>
            <div className="posts-right">
                <div className="post-title">
                   {this.props.title}
                </div>
                <div className="post-description">
                    <p>{this.props.content}</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Post;