"use client";
export default function Home() {
  return (
    <section className="max-w-[643px] h-fit m-auto flex flex-col gap-[30px]">
      <span className="w-full h-fit">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
      </span>
      <div className="w-full h-fit flex gap-[20px]">
        <span className="w-full h-fit border-2 border-black rounded-[3px]">
          <h2>Address</h2>
          <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
        </span>
        <span className="w-full h-fit border-2 border-black rounded-[3px]">
          <h2>Contact</h2>
          <p>313-332-8662 info@email.com</p>
        </span>
      </div>
      <span className="w-full h-fit bg-gray-300 flex flex-col gap-[30px] p-[20px]">
        <h3>Leave a Message</h3>
        <span className="w-full h-fit flex gap-[10px]">
          <input type="text" placeholder="Your Name" className="w-full h-fit"></input>
          <input type="text" placeholder="Your Email" className="w-full h-fit"></input>
        </span>
        <input type="text" placeholder="Subject"></input>
        <textarea placeholder="Write a message"></textarea>
        <span className="w-[130px] h-[40px] rounded-[6px] rounded-[6px] bg-[#4B6BFB] flex justify-center items-center">
          <p className="text-white">Send Message</p>
        </span>
      </span>
    </section>
  );
}
