import Header from "../components/Header.tsx";
import FormAddBottle from "../islands/FormAddBottle.tsx";

export default function Bottles() {
  return (
    <div
      className="px-4 py-8 mx-auto min-h-screen w-full bg-cover bg-center"
      style="background-image:linear-gradient(rgba(40, 0, 40, 0.9),rgba(40, 0, 40, 0.9)), url('/bg.jpg');"
    >
        <Header active="/add" />

        <FormAddBottle />
    </div>
  );
}
