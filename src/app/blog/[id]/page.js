"use client";

import { useState, useEffect } from "react";

import { useParams } from "next/navigation";

export default function Home() {
  const { id } = useParams();
  const [posts, setPosts] = useState();

  useEffect(() => {
    if (!id) return;
    fetch(`https://dev.to/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [id]);

  if(!posts) return <p>Loading</p>
  console.log(posts);
  
  return (
    <section className="max-w-[1216px] h-fit flex flex-col m-auto">
      <h1>All Blog Post</h1>
      {posts && <img src={posts.cover_image} />}
      {posts && <h2>{posts.title}</h2>}
      {posts && <p>{posts.description}</p>}
      {posts && <p>{posts.readable_publish_date}</p>}

      <div className="w-[full] h-fit flex justify-between"></div>
    </section>
  );
}
