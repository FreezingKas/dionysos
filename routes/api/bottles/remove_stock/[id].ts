import { Handlers } from "$fresh/server.ts";
import BottlesModel from "../../../../utils/db.ts";

export const handler: Handlers = {
    async POST(req, ctx) {
        // get id
        const { id } = ctx.params;
        
        // get stock
        const bottle = await BottlesModel.where("id", id).first();

        if (!bottle?.stock) {
            return new Response("Bottle not found", { status: 404 });
        }

        if (bottle.stock === 0) {
            return new Response("Bottle out of stock", { status: 400 });
        }
        const resp = BottlesModel.where("id", id).update({
            stock: Number(bottle.stock) - 1
        });

        if (!resp) {
            return new Response("Error updating stock", { status: 500 });
        }

        return new Response("OK", { status: 200 });
    }
};