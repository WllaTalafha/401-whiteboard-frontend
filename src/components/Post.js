import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import AddPostForm from "./Add-post-form";
import cookies from "react-cookies";

function Post({setlogged,logged}) {
  let [data, setData] = useState([]);

  useEffect(() => {
    const token = cookies.load("token");
    if (token) setlogged(true);
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
    if (token) {
      let bearer = { headers: { Authorization: `Bearer ${token}` } };
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