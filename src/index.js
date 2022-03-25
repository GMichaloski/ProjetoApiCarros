import path from "path";
import fastify from "fastify";
import multer from "fastify-multer";
import helmet from "fastify-helmet";
import fastifyStatic from "fastify-static";
import routes from "./routes/routes";

const app = fastify({ logger: true });
app.register(fastifyStatic, {
  root: path.join(path.resolve(), "public"),
  prefix: "/public/",
});
app.register(multer.contentParser);
app.register(helmet);
app.register(routes);

const start = async () => {
  try {
    await server.listen(5432);
    console.log(`Server ready: ${adress}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
