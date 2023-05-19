import { FastifyReply, FastifyRequest } from "fastify";
import savedToken, { actualToken } from "./savedToken";
import { ErrorReply, SuccessReply } from "../../../helpers/ServerReply";

export default async function getToken(
  request: FastifyRequest,
  reply: FastifyReply
) {
  return SuccessReply({
    reply,
    data: {
      message: "Token",
      data: savedToken[savedToken.length - 1],
    },
  });
}
