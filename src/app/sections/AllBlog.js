"use client";

import { useState, useEffect } from "react";

import Cards from "./Cards";

export default function AllBlog() {
  const [posts, setPosts] = useState([]);
  let [count, setCount] = useState(9);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?top=10&per_page=${count}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [count]);

  return (
    <section className="max-w-[1216px] h-fit flex flex-col m-auto">
      <h1>All Blog Post</h1>
      <div className="w-[full] h-fit flex justify-between">
        <span className="flex gap-[20px]">
          <p>All</p>
          <p>Design</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p>Brending</p>
        </span>
        <span>View all</span>
      </div>
      <div className="w-full h-fit flex flex-wrap gap-[20px]">
        {posts.map((card) => {
          return (
            <Cards
              img={card.cover_image}
              type={card.type_of}
              description={card.description}
              date={card.readable_publish_date}
            />
          );
        })}
      </div>
      <div className="w-full h-fit">
        <span
          className="w-[123px] h-[48px] flex justify-center items-center m-auto border-[2px] my-[20px] border-black cursor-pointer" 
          onClick={() => {
            setCount((count = count + 3));
          }}
        >
          <p>Load More</p>
        </span>
      </div>
    </section>
  );
}
