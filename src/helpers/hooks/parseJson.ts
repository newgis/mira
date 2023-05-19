import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";

export default function parseJson(
    req: FastifyRequest, 
    res: FastifyReply, 
    done: HookHandlerDoneFunction
) {
    req.headers['Content-Type'] = 'application/json';
    done();
}