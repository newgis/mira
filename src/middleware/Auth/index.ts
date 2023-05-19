import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";
import getVerifySecretKey from "../../helpers/dotenv/getVerifySecretKey";
//1122334455Aa

export default function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply,
  done: Function
) {
  const url = request.url;
  if (
    url.includes("/auth/signup") ||
    url.includes("/auth/signin") ||
    url.includes("/auth/refreshTokens") ||
    url.includes("/sendReview") ||
    url.includes("/leaveRequest")
  ) {
    done();
    return;
  }

  try {
    const authorization = request.headers["authorization"];
    const token = authorization?.replace("Bearer ", "");
    const { secretKey } = getVerifySecretKey();

    if (typeof token !== "string") {
      throw new Error("Token is not a string");
    }

    if (typeof secretKey !== "string") {
      throw new Error("Secret Key is not a string");
    }

    if (!jwt.verify(token, secretKey)) {
      throw new Error("Token is not valid");
    }

    done();
  } catch (error) {
    console.log(error);
    throw error;
  }
}
