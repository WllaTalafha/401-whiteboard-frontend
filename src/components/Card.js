import Card from 'react-bootstrap/Card';
import AddPostForm from './Add-post-form';
import AddCommentForm from './Add-comment-form';
import axios from 'axios';

function TextExample() {

    const AddPost = async (e) => {
        e.preventDefault();
        const obj = {
          postTitle: e.target.titleId.value,
          postContent: e.target.contentId.value,
          postStatus: e.target.statusId.value,
        }
        const url = `${process.env.REACT_APP_EXPRESS_URL}/post`;
        await axios.post(url, obj);
       
      }
      const AddComment = async (e) => {
        e.preventDefault();
        const obj = {
            commentContent: e.target.contentId.value,
            commentID: e.target.commentId.value
        }
        const url = `${process.env.REACT_APP_EXPRESS_URL}/comment/${obj.commentID}`;
        await axios.post(url, obj);
       
      }

    return (
        <>            
            <Card
                bg={'danger'}
                style={{ width: '18rem' , height: '19rem' }}
                className="mb-2"
            >
                <Card.Header>Post</Card.Header>
                <Card.Body>                    
                    <Card.Text>
                    <AddPostForm addPostfunction={AddPost}/>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card
                bg={'warning'}
                style={{ width: '18rem' , height: '19rem' }}
                className="mb-2"
            >
                <Card.Header>Comment</Card.Header>
                <Card.Body>
                    <Card.Text>
                    <AddCommentForm addCommentfunction={AddComment}/>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
        </>
    );
}

export default TextExample;