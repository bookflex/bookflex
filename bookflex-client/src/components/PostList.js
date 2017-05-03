/**
 * Created by Woosikoosi on 2017. 4. 28.
 */

class PostList extends Component {
  
    render() {
        let postlist = postdata.map((val,idx) => {
            return <Post key={idx} title={val.title} description={val.description} imgurl={val.imgurl}  />
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
