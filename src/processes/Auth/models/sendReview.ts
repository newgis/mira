import { FastifyReply, FastifyRequest } from "fastify";
import { SuccessReply } from "../../../helpers/ServerReply";

type TReviewRequest = { name: string, comment: string, rating: number, trackNumber: string }

type TRequest = FastifyRequest<{
    Body: TReviewRequest | null
}>

export default async function sendReview(request: TRequest, reply: FastifyReply) {
    const userInfo = request.body

    const data = "Success"

    try {
      return SuccessReply({
        reply,
        data: {
            message: "Your review received",
            data
        }
    })
    } catch (error) {
        console.log(error);
    }
}
