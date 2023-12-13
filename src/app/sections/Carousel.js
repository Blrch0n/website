'use client'

import { useState, useEffect } from "react";

export default function Carousel() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?top=100&per_page=3")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <section className="max-w-[1216px] max-h-[600px] bg-red-900 m-auto">
      <div className="flex w-fit h-full">
        {posts.map((props) => {
          return (
            <span className="w-full h-full ">
              <img src={props.social_image} className="w-full h-full"></img>
              <span>
                <p>{props.type_of}</p>
                <p>{props.description}</p>
                <p>{props.readable_publish_date}</p>
              </span>
            </span>
          );
        })}
      </div>
    </section>
  );
}
