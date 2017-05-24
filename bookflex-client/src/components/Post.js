/**
 * Created by Woosikoosi on 2017. 4. 28.
 */

import React, { Component } from 'react';

class Post extends Component {
    render() {
        
        return (
            <div className="posts">
            <div className="posts-left">
                <a href={this.props.blogurl} target="_blank"><img className="post-img" src={this.props.postImg} alt="primary" /></a>
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