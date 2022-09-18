import axios from "axios";

function AddPostForm({reload}) {
    async function AddPost(e){
        e.preventDefault();
        const postData = {
            postTitle: e.target.postTitle.value ,
            postContent: e.target.postContent.value
        }
        await axios.post(`${process.env.REACT_APP_URL}/post`,postData)
        reload();
    }
    return (
        <form className="AddPostForm" onSubmit={AddPost}>
            <input type="text" id="postTitle" placeholder="write the post title ..." /><br></br>
            <input type="text" id="postContent" placeholder="write a post ..." /><br></br><br></br>
            <input type="submit" id="postSubmit" />
        </form>
    )
}
export default AddPostForm;