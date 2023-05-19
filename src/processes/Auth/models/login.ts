import md5 from "md5";
import User from "../../../database/Users";
import IUser from "../../../types/User";
import getVerifySecretKey from "../../../helpers/dotenv/getVerifySecretKey";
import { FastifyReply, FastifyRequest } from "fastify";
import { ErrorReply, SuccessReply } from "../../../helpers/ServerReply";
import generateTokens from "../../../helpers/tokens/generateTokens";

export default async function login(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const userInfo = (request.body as any).user as IUser;
  const { secretKey, secretRefreshKey } = getVerifySecretKey();

  const query = {
    email: userInfo?.email,
  };

  try {
    
    const user = await User.findOne(query);
 
    if (!user || userInfo === null) {
      return ErrorReply({
        reply,
        data: {
          error: "User not found",
          code: 403,
        },
      });
    }

  const savedPassword = user?.password;
  const hashedPassword = md5(userInfo.password);

  if (savedPassword === hashedPassword && secretKey) {
    const tokenUserInfo = {
      email: user?.email ?? '',
      login: user?.login ?? '',
      name: user?.name ?? '',
    };

    const { access, refresh } = generateTokens({
      userData: tokenUserInfo,
      secretKey,
      secretRefreshKey,
    });

    return SuccessReply({
      reply,
      cookie: refresh,
      data: {
        message: "Login successful",
        data: {
          accessToken: access,
        },
      },
    });
  }
  } catch (error) {
    console.log(error);
    return ErrorReply({
      reply,
      data: {
        error: "Login failed",
        code: 403,
      },
    });
  }}
