import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddPostForm(props) {

  return (
    <Form onSubmit={props.addPostfunction}>
      <Form.Group>
        <Form.Label>Post Title : </Form.Label>
        <Form.Control type="text" id='titleId' placeholder="Write a title" />        
      </Form.Group>

      <Form.Group>
        <Form.Label>Post Content : </Form.Label>
        <Form.Control type="text" id='contentId' placeholder="What's on your mind" />
      </Form.Group>

      <Form.Group>
        <Form.Check type="checkbox" id='statusId' label="reviewed" />
      </Form.Group>
      <br></br>
      <Button type="submit" >
        Post
      </Button>
    </Form>   
  );
}

export default AddPostForm;