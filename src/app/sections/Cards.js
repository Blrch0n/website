export default function Cards(props) {
  return (
    <span className="w-[392px] h-[476px] p-[16px] rounded-[6px] bg-red-200">
      <img src={props.img} className="w-full h-[240px]"></img>
      <span className="w-full h-full flex flex-col">
        <p>{props.type}</p>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </span>
    </span>
  );
}
