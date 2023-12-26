import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <div
      className="px-4 py-8 mx-auto max-w-screen-full flex flex-col min-h-screen bg-cover bg-center"
      style={"background-image:linear-gradient(rgba(40, 0, 40, 0.9),rgba(40, 0, 40, 0.9)), url('/bg.jpg');"}
    >
      <Header active="/" />
      <div className="flex flex-col gap-4 text-center my-auto">
        <h1 className="text-6xl text-white font-bold">Dionysos Wine Cellar</h1>
        <div>
          <p className="text-xl text-purple-100">
            Manage your bottles cellar with Dionysos.
          </p>
          <p className="text-xl text-purple-100 italic">
            "Wine is bottled poetry."
          </p>
        </div>

        <div className="flex flex-col  items-center">
          <a
            href="/bottles"
            className="block mt-4 text-purple-600 cursor-pointer inline-flex items-center group text-purple-800 bg-white px-8 py-2 rounded-md hover:bg-purple-50 font-bold"
          >
            Manage Wines{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
