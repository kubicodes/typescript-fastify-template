import { FastifyInstance } from "fastify";
import { name as nameServicePlugin } from "./../services/name.service";

async function nameRoutes(fastify: FastifyInstance): Promise<void> {
    fastify.get("/name", (): { name: string } => {
        const nameService = fastify[nameServicePlugin];

        const name = nameService?.getName() as string;

        return { name };
    });

    fastify.post<{ Body: { name: string } }>("/name", (request): { message: string } => {
        const nameService = fastify[nameServicePlugin];
        const nameToSet = request.body.name;
        nameService?.setName(nameToSet);

        return { message: `Successfully set the name to ${nameToSet}` };
    });
}

export default nameRoutes;
