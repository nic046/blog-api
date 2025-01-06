import { PostgresDataBase } from "./data";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

async function main() {
  const postgres = new PostgresDataBase({
    username: "academlo-blog_owner",
    password: "DiGkJWc0Fd7a",
    host: "ep-summer-bush-a5ixrglr.us-east-2.aws.neon.tech",
    database: "academlo-blog",
    port: 5432,
  });

  await postgres.connect();

  const server = new Server({
    port: 3000,
    routes: AppRoutes.routes,
  });
  await server.start();
}

main();
