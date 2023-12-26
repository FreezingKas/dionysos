import { Handlers } from "$fresh/server.ts";
import BottlesModel from "../../../../utils/db.ts";

export const handler: Handlers = {
    async POST(req, ctx) {
        // get id
        const { id } = ctx.params;
        console.log(id);

        // get stock
        const bottle = await BottlesModel.where("id", id).first();

        if (!bottle) {
            return new Response("Bottle not found", { status: 404 });
        }
        const resp = BottlesModel.where("id", id).update({
            stock: Number(bottle.stock) + 1
        });

        if (!resp) {
            return new Response("Error updating stock", { status: 500 });
        }
    

        return new Response("OK", { status: 200 });
    }
};