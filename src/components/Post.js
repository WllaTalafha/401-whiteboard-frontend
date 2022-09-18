import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import AddPostForm from "./Add-post-form";

function Post() {
  let [data, setData] = useState([]);

  useEffect(() => {
    getData().then((resolve) => {
      setData(resolve);
    });
  }, []);

  async function reload() {
    getData().then((resolve) => {
      setData(resolve);
    });
  };

  async function getData() {
    const getData = await axios.get(`${process.env.REACT_APP_URL}/post`);
    const recievedData = getData.data;
    return recievedData;
  };


  return (
    <div className="post">
      <AddPostForm reload={reload}/>
      <PostCard data={data} reload={reload}/>
    </div>
  )
}
export default Post;