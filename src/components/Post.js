import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import AddPostForm from "./Add-post-form";
import cookies from "react-cookies";
import { AuthContext } from '../contexs/AuthProvider';
import { useContext } from 'react';

function Post() {
  const { logged, setlogged } = useContext(AuthContext);
  let [data, setData] = useState([]); 
 
  useEffect(() => {
      getData().then((resolve) => {
      setData(resolve);
    });
  });

  async function reload() {
    getData().then((resolve) => {
      setData(resolve);
    });
  };

  async function getData() {
    const token = cookies.load("token");
    let bearer = { headers: { Authorization: `Bearer ${token}` } };    
    if (token ) {   
    setlogged(true);
    const getData = await axios.get(`${process.env.REACT_APP_URL}/post`,bearer);
    const recievedData = getData.data;
    return recievedData;
  }
  };


  return (
    <div className="post">
      <AddPostForm reload={reload} />
      <PostCard data={data} reload={reload} />
    </div>
  )
}
export default Post;