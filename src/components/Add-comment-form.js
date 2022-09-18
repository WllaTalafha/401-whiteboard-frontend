import axios from "axios";

function AddCommentForm({ reload, commentData, postID }) {
  async function postComment(e) {
    e.preventDefault();
    const commentData = {
      commentContent: e.target.commentContent.value,
      commentID: postID
    }
    await axios.post(`${process.env.REACT_APP_URL}/comment/${postID}`, commentData);
    reload();
  }
  return (
    <>
      <div>
        {commentData.map((item, index) => <div key={index}><p>{item.commentContent}</p><hr></hr></div>)}
      </div><br></br>
      <form className="addCommentForm" onSubmit={postComment}>
        <input type='text' id="commentContent" placeholder='write a commnet ...'></input>
        <input type='submit' id="commentSubmit" value='post'></input>
      </form>
    </>
  )
}
export default AddCommentForm; 