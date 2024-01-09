  import { SSQL, SSQLTable } from "https://deno.land/x/smallorm_sqlite@0.2.1/mod.ts";

export class BottlesModel extends SSQLTable {
  name!: string;
  year!: string;
  description!: string;
  image_link!: string;
  stock!: number;

}

export const orm = new SSQL("utils/database.sqlite", [BottlesModel]);