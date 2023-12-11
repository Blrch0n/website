"use client";

import { useState, useEffect } from "react";

export default function Trending() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?top=10&per_page=4")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <section className="max-w-[1230px] h-fit m-auto">
      <h2>Trending</h2>
      <div className="w-full h-fit flex justify-between">
        {posts.map((card) => {
          return (
            <span className="w-[289px] h-[320px] bg-cover">
              <img src={card.social_image} className="w-full h-full object-fit"></img>
            </span>
          );
        })}
      </div>
    </section>
  );
}
