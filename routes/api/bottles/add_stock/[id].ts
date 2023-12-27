import { Handlers } from "$fresh/server.ts";
import { BottlesModel, orm } from "../../../../utils/db.ts";

export const handler: Handlers = {
  async POST(_req, ctx) {
    // get id
    const { id } = ctx.params;
    console.log(id);

    // get stock
    const bottle = await orm.findMany(BottlesModel, {
      limit: 1,
      where: { clause: "id = ?", values: [id] },
    });

    if (!bottle) {
      return new Response("Bottle not found", { status: 404 });
    }

    bottle[0].stock += 1;
    orm.save(bottle[0]);

    return new Response("OK", { status: 200 });
  },
};
