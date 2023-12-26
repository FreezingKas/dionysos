import IconGlassFullFilled from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/glass-full-filled.tsx"

type Props = {
    readonly active: string;
};

export default function Header({ active }: Readonly<Props>) {
    const menus = [
        { name: "Home", href: "/" },
        { name: "Bottles", href: "/bottles" },
    ];

  return (
    <div className="bg-transparent w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4 mx-auto">
      <div className="flex items-center flex-1 text-white">
        <IconGlassFullFilled aria-hidden="true" class="h-10 w-10" />
        <div className="text-3xl ml-1 font-bold">
          Dionysos
        </div>
      </div>
      <ul className="flex items-center gap-6">
        {menus.map((menu) => (
          <li key={menu.name}>
            <a
              href={menu.href}
              className={"text-gray-200 hover:text-gray-400 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
        <li>
            <a
                href="/add"
                className={"text-purple-600 bg-white px-4 font-bold py-2 rounded-md hover:text-purple-400 py-1 border-gray-500"}
            >
                Add Bottle
            </a>
        </li>
      </ul>
    </div>
  );
}
