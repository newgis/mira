import jwt from "jsonwebtoken";
import { PayloadType } from "../../types/User";
import getVerifySecretKey from "../dotenv/getVerifySecretKey";

type IsValidTokenType = {
  token: string;
  isRefresh: boolean;
};

export default function isValidToken({
  token,
  isRefresh = false,
}: IsValidTokenType): { result: boolean, payload: PayloadType | null } {
  const { secretKey, secretRefreshKey } = getVerifySecretKey();

  let payloadResult: PayloadType | null = null

  const key = isRefresh ? secretRefreshKey : secretKey;

  if (typeof key !== "string") {
    return { result: false, payload: payloadResult };
  }

  jwt.verify(token, key, (err, payload: any) => {
    try {
      payloadResult = { email: payload?.email, login: payload?.login, name: payload?.name }
    } catch (error) {
      console.log(err);
    }
  });  

  try {
    if (jwt.verify(token, key)) {
      return {result: true, payload: payloadResult};
    } else {
      return {result: false, payload: payloadResult};
    }
  } catch {
    return {result: false, payload: payloadResult};
  }
}
