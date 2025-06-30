import Hapi from "@hapi/hapi";
import { userRoute } from "./routes/user";
import { z } from "zod";

export async function buildServer(): Promise<Hapi.Server> {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route([userRoute]);
  return server;
}
