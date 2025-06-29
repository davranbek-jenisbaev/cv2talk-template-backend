import { DataSource } from "typeorm";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, ".env") });

const DataSourceConfig = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrations: [resolve(__dirname, "migrations/*.{js,ts}")],
  entities: [resolve(__dirname, "src/modules/**/entities/*.entity.ts")],
  synchronize: false,
  migrationsTableName: "migrations",
  uuidExtension: "uuid-ossp",
});

export default DataSourceConfig;
