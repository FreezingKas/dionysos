import { Handlers, PageProps } from "$fresh/server.ts";
import Card from "../islands/Card.tsx";
import Header from "../components/Header.tsx";
import {BottlesModel, orm} from "../utils/db.ts";

export default function Bottles({ data }: PageProps) {
  return (
    <div
      className="px-4 py-8 mx-auto min-h-screen w-full bg-cover bg-center"
      style="background-image:linear-gradient(rgba(40, 0, 40, 0.9),rgba(40, 0, 40, 0.9)), url('/bg.jpg');"
    >
      <Header active="/bottles" />
      <div className="max-w-screen-xl mx-auto flex flex-wrap gap-8 my-12 items-center justify-center">
        {data.map((bottle: BottlesModel) => (
          <Card
            key={bottle.id}
            id={bottle.id}
            image_link={bottle.image_link}
            name={bottle.name}
            year={bottle.year}
            description={bottle.description}
            stock={bottle.stock}
          />
        ))}
      </div>
    </div>
  );
}

export const handler: Handlers = {
  GET(_req, ctx) {
    const bottles = orm.findMany(BottlesModel, {})
    return ctx.render(bottles);
  },
};
