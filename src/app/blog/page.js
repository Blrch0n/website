"use client";

import { useState, useEffect, useContext } from "react";

import Link from "next/link";

import Cards from "@/app/sections/Cards";
import { someContext } from "../layout";

export default function Home() {
  const [posts, setPosts] = useState([]);
  let [count, setCount] = useState(12);
  const { search, setSearch } = useContext(someContext);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?top=20&per_page=${count}`)
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
        {posts
          .filter((item) =>
            item.title.toLowerCase === ""
              ? item.title
              : item.title.toLowerCase().includes(search)
          )
          .map((card) => {
            return (
              <div key={card.id} className="w-[392px] h-[476px]">
                <Link href={`/blog/${card.id}`}>
                  <Cards
                    img={card.cover_image}
                    type={card.type_of}
                    description={card.description}
                    date={card.readable_publish_date}
                    title={card.title}
                  />
                </Link>
              </div>
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
