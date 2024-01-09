import { useSignal } from "@preact/signals";

export default function FormAddBottle() {
  // Create signals
  const name = useSignal("");
  const year = useSignal("");
  const description = useSignal("");
  const image_link = useSignal("");
  const stock = useSignal(0);
  const resp_text = useSignal("");

  // Create a new bottle
  const addBottle = async () => {
    const response = await fetch("/api/bottles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        year: year.value,
        description: description.value,
        image_link: image_link.value,
        stock: stock.value,
      }),
    });

    if (response.ok) {
      // Clear the form
      name.value = "";
      year.value = "";
      description.value = "";
      image_link.value = "";
      stock.value = 0;
      resp_text.value = "Bottle added successfully";
    } else {
      resp_text.value = "Error while adding the bottle";
    }
  };

  return (
    <div className="flex flex-col gap-4 text-center my-auto">
      <h1 className="text-6xl text-white font-bold">Add a bottle</h1>
      <div>
        <p className="text-xl text-purple-100">
          Add a bottle to your cellar.
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        {/* Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Bottle name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Gewurztraminer"
            value={name.value}
            onChange={(e) => name.value = e.currentTarget.value}
            required
          />
        </div>
        {/* Year */}
        <div className="mb-5">
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Year
          </label>
          <input
            type="text"
            id="year"
            placeholder="2021"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={year.value}
            onChange={(e) => year.value = e.currentTarget.value}
            required
          />
        </div>
        {/* Description */}
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="Alsace"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={description.value}
            onChange={(e) => description.value = e.currentTarget.value}
            required
          />
        </div>
        {/* Image link */}
        <div className="mb-5">
          <label
            htmlFor="image_link"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image link
          </label>
          <input
            type="text"
            id="image_link"
            placeholder="gewurtzraminer.jpg"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={image_link.value}
            onChange={(e) => image_link.value = e.currentTarget.value}
            required
          />
        </div>
        {/* Stock */}
        <div className="mb-5">
          <label
            htmlFor="stock"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stock
          </label>
          <input
            type="number"
            id="stock"
            placeholder="5"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={stock.value}
            onChange={(e) => stock.value = parseInt(e.currentTarget.value)}
            required
          />
        </div>
        <button
          className="text-purple-600 bg-white px-4 font-bold py-2 rounded-md hover:text-purple-400 py-1 border-gray-500"
          onClick={(e) => {
            e.preventDefault();
            addBottle();
          }}
        >
          Add Bottle
        </button>
      </div>
      <div className="text-xl ml-1 my-2 text-gray-100 text-center">
          {resp_text.value}
        </div>
    </div>
  );
}
