import {FastifyReply, FastifyRequest} from "fastify";
import getVerifySecretKey from "../../../helpers/dotenv/getVerifySecretKey";
import { ErrorReply, SuccessReply } from "../../../helpers/ServerReply";
import generateTokens from "../../../helpers/tokens/generateTokens";
import isValidToken from "../../../helpers/tokens/isValidToken";

type RefreshTokensRequest = FastifyRequest<{
    Body: {
      user: {
        email: string,
        login: string
      }
    }
}>

export default async function refreshTokens(request: RefreshTokensRequest, reply: FastifyReply) {
  const refreshToken = request.cookies?.refresh
  // const userTokenInfo = request.body?.user;
  console.log(refreshToken, 'refreshToken');
  // console.log(userTokenInfo, 'userTokenInfo');
  
  
  const { secretRefreshKey, secretKey } = getVerifySecretKey();

  if (!refreshToken) {
    return ErrorReply({
      reply,
      data: {
          error: "Token not a string",
          code: 401
      }
  })
  }

  // if (!userTokenInfo?.email || !userTokenInfo?.login) {
  //   return ErrorReply({
  //     reply,
  //     data: {
  //         error: "Invalid user info",
  //         code: 400
  //     }
  // })
  // }

  try {

    const isValid = isValidToken({ token: refreshToken, isRefresh: true })

    console.log(isValid, 'isValid');
    
    if (!isValid.result || !isValid.payload) {
      return ErrorReply({
        reply,
        data: {
            error: "jwt expired",
            code: 401
        }
    })
    }

    const { access, refresh } = generateTokens({
      userData: isValid.payload,
      secretKey,
      secretRefreshKey,
    });
    

    return SuccessReply({
      reply,
      cookie: refresh,
      data: {
          message: "jwt updated",
          data: {
            accessToken: access,
          }
      }
  })
  } catch (error) {
      console.log(error);
  }
}
