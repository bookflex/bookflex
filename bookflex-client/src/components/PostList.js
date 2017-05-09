/**
 * Created by Woosikoosi on 2017. 4. 28.
 */



class PostList extends Component {
  
    render() {
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

export default PostList;
