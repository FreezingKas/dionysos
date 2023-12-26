import { Handlers } from "$fresh/server.ts";
import BottlesModel from "../../../utils/db.ts";
import { download } from "https://deno.land/x/download@v2.0.2/mod.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const bottles = await BottlesModel.select(
      "id",
      "name",
      "year",
      "description",
      "image_link",
      "stock",
      "updated_at"
    ).all();
    return new Response(JSON.stringify(bottles), { status: 200 });
  },

  async POST(req, ctx) {
    const params = await req.json();
    if (!params) {
      return new Response("Missing parameters", { status: 400 });
    }
    
    // generate sha256 random name
    const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(params.image_link));

    // generate file name with hash and the extension in image_link
    const fileName = Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, "0")).join("") + "." + params.image_link.split(".").pop();

    const image = await download(params.image_link, {dir: "./static/bottles", file: fileName});
    if (!image) {
      return new Response("Error downloading image", { status: 500 });
    }

    const bottle = await BottlesModel.create([{
      name: params.name,
      description: params.description,
      stock: params.stock,
      image_link: fileName,
      year: params.year,
    }]);

    console.log("[INFO] Bottle created: " + params.name);

    if (!bottle) {
      return new Response("Error creating bottle", { status: 500 });
    }

    return new Response("OK", { status: 200 });
  },
};
