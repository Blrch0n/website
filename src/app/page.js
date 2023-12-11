"use client";
import Carousel from "./sections/Carousel";
import Trending from "./sections/Trending";
import AllBlog from "./sections/AllBlog";

export default function Home() {
  return (
    <section className="w-full h-fit">
      <Carousel />
      <Trending />
      <AllBlog />
    </section>
  );
}
