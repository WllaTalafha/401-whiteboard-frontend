import axios from 'axios';
import AddCommentForm from './Add-comment-form';

function PostCard({ data, reload }) {
    async function deletePost(postID){
        await axios.delete(`${process.env.REACT_APP_URL}/post/${postID}`);
        reload();
    }
    return (
        <div className="cards">
            {data.map((item, index) => {
                return (
                    <div className="postCard" key={index}>
                        <button id='delete' onClick={()=>deletePost(item.id)}>X</button>
                        <h2>{item.postTitle}</h2>
                        <br></br>
                        <h3>{item.postContent}</h3>
                        <br></br>
                        <AddCommentForm commentData={item.Comments} postID={item.id} reload={reload} />
                    </div>
                )
            })}
        </div>
    );
}
export default PostCard;