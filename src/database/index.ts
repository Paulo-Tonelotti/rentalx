import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";

const db = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password:"ignite",
  database: "rentx",
  migrations: ["./src/database/migrations/*.ts"],
  entities: [Category]
});



export default db;