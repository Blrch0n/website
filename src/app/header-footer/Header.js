import Link from "next/link";

export default function Header() {
  return (
    <section className="w-[1215px] h-fit m-auto">
      <div className="w-full h-fit flex justify-between">
        <span className="flex flex-col gap-[24px] w-[240px] h-fit">
          <p>About</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <span>
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </span>
        </span>
        <span className="flex flex-col h-fit">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </span>
        <span className="flex flex-row gap-[26.67px] h-fit">
          <img src="/face.svg"></img>
          <img src="/twitter.svg"></img>
          <img src="/instagram.svg"></img>
          <img src="/Linkdedin.svg"></img>
        </span>
      </div>
      <div className="w-full h-fit flex flex-row justify-between py-[20px]">
        <img src="/bottom_logo.svg"></img>
        <span className="flex flex-row gap-[32px] h-full items-center">
          <a href="./">Terms of Use</a>
          <a href="./">Privacy Policy</a>
          <a href="./">Cookie Policy</a>
        </span>
      </div>
    </section>
  );
}
