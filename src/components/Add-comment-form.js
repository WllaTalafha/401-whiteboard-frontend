import axios from "axios";
import cookies from "react-cookies";

function AddCommentForm({ reload, commentData, postID }) {
  async function postComment(e) {
    e.preventDefault();
    const commentAuthorID =cookies.load("id");
    const commentData = {
      commentContent: e.target.commentContent.value,
      commentID: postID,
      commentAuthorID:commentAuthorID
    }
  
    await axios.post(`${process.env.REACT_APP_URL}/comment/${postID}/${commentAuthorID}`, commentData);
    reload();
  }
  return (
    <>
      <div>
        {commentData.map((item, index) => <div key={index}><p>{item.commentContent}</p><p>{`by: ${item.commentAuthor}`}</p><hr></hr></div>)}
      </div><br></br>
      <form className="addCommentForm" onSubmit={postComment}>
        <input type='text' id="commentContent" placeholder='write a commnet ...'></input>
        <input type='submit' id="commentSubmit" value='post'></input>
      </form>
    </>
  )
}
export default AddCommentForm; 