export default function BackTools({
  title,
  image,
}: {
  title: string;
  image: string;
}) {

  return (
    <div className="flex  justify-between items-center border border-white/50 bg-white/15 backdrop-blur-[6px] py-3.5 px-5 rounded-2xl cursor-pointer">
      <div className="text-white text-lg font-semibold leading-6">{title}</div>
      <img
        alt="launcher"
        className="h-7 w-14 object-contain"
        src={image}
      />
    </div>
  );
}
