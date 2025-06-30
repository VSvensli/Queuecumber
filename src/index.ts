import { buildServer } from "./server";

buildServer()
  .then((server) => {
    server.start();
  })
  .catch((err) => {
    console.error("Error starting server:", err);
  });
