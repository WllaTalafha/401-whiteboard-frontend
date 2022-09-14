import React from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
// import AddForm from './Add-post-form';
// import AddComment from './Add-comment-form';


export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      showPosts: false,
    };
  }
  async componentDidMount() {
    const url = `${process.env.REACT_APP_URL}/post`;
    let postsWithComments = await axios.get(url);
    
    this.setState({
      posts: postsWithComments.data,
      showPosts: true,
    });
  }

 
  render() {
    return (
      <div>     
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>content</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {this.state.showPosts &&
            this.state.posts.map((item,idx) => {
              return (
                <tr key={idx}>                 
                  <td>{item.postTitle}</td>
                  <td>{item.postContent}</td>
                  {item.coments.map((item, idx) => {
                    return (
                        <div key={idx}>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>commentContent</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr >
                        <td>{item.commentID}</td>
                        <td>{item.commentContent}</td>
                      </tr>
                      </tbody>
                      </div>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </Table>
      </div>
    );
  }
}
