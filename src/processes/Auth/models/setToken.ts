import { FastifyReply, FastifyRequest } from "fastify";
import savedToken from "./savedToken";
import { SuccessReply } from "../../../helpers/ServerReply";

export default async function setToken(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const token: any = request.body;
  savedToken.push(token);
  return SuccessReply({
    reply,
    data: {
      message: "Token",
      data: savedToken[savedToken.length - 1],
    },
  });
}