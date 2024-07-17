export default function DemoApplication() {
  return (
    <div
      className={
        "bg-white border border-gray-300 rounded-lg h-[80%] w-[90%] p-4"
      }
    >
      <iframe
        src={"https://road-to-dev-demo.vercel.app/"}
        width={"100%"}
        height={"100%"}
      ></iframe>
    </div>
  );
}
