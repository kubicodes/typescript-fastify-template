import fastify from "fastify";
import nameServicePlugin from "./modules/name/services/name.service";
import nameRoutes from "./modules/name/routes/name.route";

const app = fastify();
const PORT = 8080;

app.get("/", (_, reply) => {
    reply.send({ message: "Hello World" });
});

app.register(nameServicePlugin);
app.register(nameRoutes);

app.listen({ port: PORT }, () => {
    console.log(`Server started at port ${PORT}`);
});
