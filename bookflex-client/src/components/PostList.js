/**
 * Created by Woosikoosi on 2017. 4. 28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import { getPost } from '../actions'

class PostList extends Component {
    

    render() {
        const postdata = this.props.getPost();
        console.log(postdata);
        let postlist = postdata.slice(0,10).map((val,idx) => {
            return <Post key={val.postId} title={val.title} author={val.author} content={val.content} postImg={val.postImg} releasedDate={val.releasedDate}  />
        });
        console.log(postlist);
        return (
            <div className="main">
                   {postlist}
            </div>
        )
    }

}

function mapDispatchToProps(dispatch) {
  return {
    getPost: () => {
      dispatch(getPost());
    }
  }
}

export default connect(mapDispatchToProps)(PostList);
