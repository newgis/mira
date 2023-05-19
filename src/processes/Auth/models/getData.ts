import IUser from "../../../types/User";
import { FastifyReply, FastifyRequest } from "fastify";
import { SuccessReply } from "../../../helpers/ServerReply";

type RegisterUserRequest = FastifyRequest<{
    Body: {
        user: IUser | null
    }
}>

export default async function getData(request: RegisterUserRequest, reply: FastifyReply) {
    const userInfo = request.headers
    console.log(userInfo, 'userInfo');
    
    // const { secretKey, secretRefreshKey } = getVerifySecretKey();
    const data = { text: 'Victor SIT!' }
    try {
      return SuccessReply({
        reply,
        data: {
            message: "Data send",
            data
        }
    })
    } catch (error) {
        console.log(error);
    }
}
