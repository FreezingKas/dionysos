import { Handlers } from "$fresh/server.ts";
import { re } from "$std/semver/_shared.ts";
import { BottlesModel, orm } from "../../../utils/db.ts";
import { download } from "https://deno.land/x/download@v2.0.2/mod.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    const bottles = await orm.findMany(BottlesModel, {});
    return new Response(JSON.stringify(bottles), { status: 200 });
  },

  async POST(req, _ctx) {
    const params = await req.json();
    if (!params) {
      return new Response("Missing parameters", { status: 400 });
    }

    // generate sha256 random name
    const hash = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(params.image_link),
    );

    // generate file name with hash and the extension in image_link
    const fileName =
      Array.from(new Uint8Array(hash)).map((b) =>
        b.toString(16).padStart(2, "0")
      ).join("") + "." + params.image_link.split(".").pop();

    const image = await download(params.image_link, {
      dir: "./static/bottles",
      file: fileName,
    }).catch((err) => {
      console.log(err);
      return new Response("Error downloading image", { status: 500 });
    });
    if (!image) {
      return new Response("Error downloading image", { status: 500 });
    }

    const bottle = new BottlesModel();
    bottle.name = params.name;
    bottle.description = params.description;
    bottle.stock = params.stock;
    bottle.image_link = fileName;
    bottle.year = params.year;

    orm.save(bottle);

    console.log("[INFO] Bottle created: " + params.name);

    if (!bottle) {
      return new Response("Error creating bottle", { status: 500 });
    }

    return new Response("OK", { status: 200 });
  },
};
