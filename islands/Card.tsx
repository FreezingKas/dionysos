import { useSignal } from "@preact/signals";

type Props = {
  readonly id: number;
  readonly image_link: string;
  readonly name: string;
  readonly year: string;
  readonly description: string;
  readonly stock: number;
};

export default function Card(
  { id, image_link, name, year, description, stock }: Readonly<Props>,
) {
  const stock_signal = useSignal(stock);
  async function addBottle() {
    const resp = await fetch(
      "http://localhost:8000/api/bottles/add_stock/" + id,
      {
        method: "POST",
      },
    );

    if (resp.ok) {
      stock_signal.value += 1;
    }
  }

  async function removeBottle() {
    const resp = await fetch(
      "http://localhost:8000/api/bottles/remove_stock/" + id,
      {
        method: "POST",
      },
    );

    if (resp.ok) {
      stock_signal.value -= 1;
    }
  }
  return (
    <div
      className="flex flex-col items-center shadow-xl rounded-lg p-8 w-72 bg-[#3E0A4B]"
      style={"height: 26 rem;"}
    >
      <div className="flex flex-col gap-4 my-auto mx-auto">
        <img
          src={"/bottles/" + image_link}
          alt={name}
          // Fit the image in a 32x32 box
          className="object-contain h-32 w-32 mx-auto"
        />
        <div className="text-2xl ml-1 font-bold text-center text-white">
          {name}
        </div>
        <div className="text-xl ml-1 text-gray-200 text-center italic">
          {year} - {description}
        </div>
        <div className="text-xl ml-1 text-gray-100 text-center">
          Stock : {stock_signal.value}
        </div>
        <div className="flex flex-row mx-auto gap-4">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            onClick={addBottle}
          >
            Add
          </button>
          <button
            className={"bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" +
              (stock_signal.value === 0
                ? " opacity-50 cursor-not-allowed"
                : "")}
            onClick={removeBottle}
            disabled={stock_signal.value === 0}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
