import { DataSource } from "typeorm";

const db = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "docker",
  password:"ignite",
  database: "rentx"
});

db.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export { db };