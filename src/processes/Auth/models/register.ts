import User from "../../../database/Users";
import IUser from "../../../types/User";
import md5 from "md5";
import { FastifyReply, FastifyRequest } from "fastify";
import { ErrorReply, SuccessReply } from "../../../helpers/ServerReply";
import generateTokens from "../../../helpers/tokens/generateTokens";
import getVerifySecretKey from "../../../helpers/dotenv/getVerifySecretKey";

type RegisterUserRequest = FastifyRequest<{
    Body: {
        user: IUser | null
    }
}>

export default async function registerUser(request: RegisterUserRequest, reply: FastifyReply) {
    const userInfo = request.body.user;
    const { secretKey, secretRefreshKey } = getVerifySecretKey();
    console.log(request.body, '123123');
    
    if (userInfo == null) {
        return ErrorReply({
            reply,
            data: {
                error: "User not found",
                code: 400
            }
        })
    }

    if (!secretKey) {
        return ErrorReply({
            reply,
            data: {
                error: "Server token not valid",
                code: 500
            }
        })
    }

    try {
        const user = await User.create({
            email: userInfo.email,
            login: userInfo.login,
            name: userInfo.name,
            password: md5(userInfo.password),
            phone: userInfo?.phone
        });

        await user.save();

        const { access, refresh } = generateTokens({
            userData: userInfo,
            secretKey,
            secretRefreshKey,
        });

        return SuccessReply({
            reply,
            cookie: refresh,
            data: {
                message: "User saved successfully",
                data: {...userInfo, accessToken: access}
            }
        })
    } catch (error) {
        console.log(error);
        return ErrorReply({
            reply,
            data: {
                error: "User registration failed",
                code: 400
            }
        })
    }
}
