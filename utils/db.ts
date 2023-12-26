import {
  Database,
  Model,
  SQLite3Connector,
  DataTypes,
} from "https://deno.land/x/denodb@v1.2.0/mod.ts";

const connector = new SQLite3Connector({
  filepath: "./database.sqlite",
});

const db = new Database(connector);

class BottlesModel extends Model {
  static table = "bottles";
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    year: DataTypes.STRING,
    description: DataTypes.STRING,
    image_link: DataTypes.STRING,
    stock: DataTypes.INTEGER
  };
}

db.link([BottlesModel]);

await db.sync(); 

// export Bottle model  
export default BottlesModel;