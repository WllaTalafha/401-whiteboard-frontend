import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddCommentForm(props) {
  return (
    <Form onSubmit={props.addCommentfunction}>
      <Form.Group>
        <Form.Label>Comment Content : </Form.Label>
        <Form.Control type="text"  id='contentId' placeholder="Write a comment" />        
      </Form.Group>

      <Form.Group>
        <Form.Label>Add to the post number : </Form.Label>
        <Form.Control type="text"  id='commentId' placeholder="What's on your mind" />
      </Form.Group>
      <br></br>
      <Button type="submit">
        Post
      </Button>
    </Form>   
  );
}

export default AddCommentForm;