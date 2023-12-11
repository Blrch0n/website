"use client";

import { useState, useEffect } from "react";

import Cards from "@/app/sections/Cards";
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

  console.log(posts);
  return (
    <section className="max-w-[1216px] h-fit flex flex-col m-auto">
      <h1>All Blog Post</h1>
      {posts && <img src={posts.cover_image} />}
      {posts && (
        <div dangerouslySetInnerHTML={{ __html: posts.body_html }}></div>
      )}
      <div className="w-[full] h-fit flex justify-between"></div>
    </section>
  );
}
