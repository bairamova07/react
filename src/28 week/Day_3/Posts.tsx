import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Posts() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())    //key:value[Massive] {object}
      .then((data) => setPosts(data));    //posts=data
  }, []);

  return(
    <div>
        <Navbar/>
         <h1
        {posts.map((post)=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <Link to={`/posts/${post.id}`}>Datail</Link>
                </div>
        ))}
    </div>
  )




}
