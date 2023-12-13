import Link from "next/link";
import { useContext } from "react";
import { someContext } from "../layout";

export default function Footer() {
  const { search, setSearch } = useContext(someContext);
  return (
    <section className="max-w-[1130px] h-fit py-[32px] m-auto flex justify-between">
      <Link href="/">
        <img src="/Logo.svg"></img>
      </Link>
      <div className="max-w-[667px] h-[24px] flex items-center justify-around">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <input
        type="text"
        placeholder="Search"
        onChange={(props) => {
          setSearch(props.target.value);
        }}
      ></input>
    </section>
  );
}
