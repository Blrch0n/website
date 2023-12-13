"use client";

import { useState, useEffect, useContext } from "react";

import Cards from "./Cards";
import Link from "next/link";
import { someContext } from "../layout";

const navbar_data = [
  "All",
  "Design",
  "Travel",
  "Fashion",
  "Technology",
  "Branding",
];

export default function AllBlog() {
  const [posts, setPosts] = useState([]);
  const [tag, setTag] = useState(navbar_data[0]);
  let [count, setCount] = useState(9);
  const { search, setSearch } = useContext(someContext);

  useEffect(() => {
    fetch(
      `https://dev.to/api/articles?top=1000&per_page=${count}${
        tag === "All" ? `` : `&tag=${tag.toLowerCase()}?$`
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [count, tag]);

  return (
    <section className="max-w-[1216px] h-fit flex flex-col m-auto">
      <h1>All Blog Post</h1>
      <div className="w-[full] h-fit flex justify-between">
        <span className="flex gap-[20px]">
          {navbar_data.map((item) => {
            return (
              <div
                dev
                onClick={() => {
                  setCount((count = 9));
                  setTag(item);
                }}
                key={item}
                className="cursor-pointer"
                style={{ color: item == tag ? "red" : "" }}
              >
                {item}
              </div>
            );
          })}
        </span>
        <Link href="/blog">View all</Link>
      </div>
      <div className="w-full h-fit flex flex-wrap gap-[20px]">
        {posts
          .filter((item) =>
            item.title.toLowerCase() === ""
              ? item
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
