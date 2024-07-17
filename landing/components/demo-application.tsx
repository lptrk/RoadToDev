export default function DemoApplication() {
  return (
    <div
      className={
        "bg-white border border-gray-300 rounded-lg h-[80%] w-[90%] p-4"
      }
    >
      <iframe
        src={"http://localhost:3000"}
        width={"100%"}
        height={"100%"}
      ></iframe>
    </div>
  );
}
