import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div
        className="px-4 py-8 mx-auto max-w-screen-full flex flex-col min-h-screen bg-cover bg-center"
        style={"background-image:linear-gradient(rgba(40, 0, 40, 0.9),rgba(40, 0, 40, 0.9)), url('/bg.jpg');"}
      >
        <Header active="" />
        <div className="flex flex-col gap-4 text-center my-auto">
          <h1 className="text-6xl text-white font-bold">
            Page Not Found
          </h1>
        </div>
      </div>
    </>
  );
}
