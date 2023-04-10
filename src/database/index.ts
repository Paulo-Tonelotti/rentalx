import { DataSource } from "typeorm";

const db = new DataSource({
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "docker",
  password:"ignite",
  database: "rentx",
  migrations: ["./src/database/migrations/*.ts"]
});

db.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export { db };