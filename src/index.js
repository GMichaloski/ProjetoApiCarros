import path from "path";
import fastify from "fastify";
import multer from "fastify-multer";
import helmet from "fastify-helmet";
import fastifyStatic from "fastify-static";
// import { givenRoutes } from "./routes/routes";

const server = fastify({ logger: true });
server.register(fastifyStatic, {
  root: path.join(path.resolve(), "public"),
  prefix: "/public/",
});
server.register(multer.contentParser);
server.register(helmet);
// server.register(givenRoutes);

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server ready: ${address}`);
});
