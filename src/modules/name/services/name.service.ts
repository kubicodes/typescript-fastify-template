import { FastifyInstance } from "fastify";
import fp from "fastify-plugin";

export const name = "nameService";

export interface INameService {
    getName(): string;
    setName(name: string): void;
}

export class NameService implements INameService {
    private name: string = "";

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
}

export default fp(async (fastify: FastifyInstance) => {
    fastify.decorate(name, new NameService());
});

// for development experience and auto completion
declare module "fastify" {
    interface FastifyInstance {
        [name]?: INameService;
    }
}
