import Link from "next/link";

export default function Footer (){
    return <section className="max-w-[1130px] h-fit py-[32px] m-auto flex justify-between">
        <img src="Logo.svg"></img>
        <div className="max-w-[667px] h-[24px] flex items-center justify-around">
            <Link href='/'>Home</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/contact'>Contact</Link>
        </div>
        <input type="text" placeholder="Search"></input>
    </section>
}