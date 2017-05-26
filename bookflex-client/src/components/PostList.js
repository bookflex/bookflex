/**
 * Created by Woosikoosi on 2017. 4. 28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import {fetchPost} from '../actions'

class PostList extends Component {
  componentWillMount() {
    this.props.fetchPost();
  }

  render() {
    if (typeof(this.props.postlist) == 'undefined') {
      return <div>
      </div>
    }
    return (
      <div className="main">
        {this.props.postlist.slice(0, 10).map((val, idx) => {
          return <Post key={val.postId} title={val.title} author={val.author} content={val.content}
                       postImg={val.postImg} releasedDate={val.releasedDate} blogurl={val.blogurl}/>
        })}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPost: () => {
      dispatch(fetchPost());
    }
  }
}

function mapStateToProps(state) {
  return {
    postlist: state.posts.bestsellerPostList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);


  
 
