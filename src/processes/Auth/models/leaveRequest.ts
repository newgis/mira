import { FastifyReply, FastifyRequest } from "fastify";
import { SuccessReply } from "../../../helpers/ServerReply";

type TReviewRequest = any

type TRequest = FastifyRequest<{
    Body: TReviewRequest | null
}>

export default async function leaveRequest(request: TRequest, reply: FastifyReply) {
    try {
      return SuccessReply({
        reply,
        data: {
            message: "Ok",
            data: {}
        }
    })
    } catch (error) {
        console.log(error);
    }
}
