import jwt from "jsonwebtoken";
import { IAuthTokens } from "../../types/AuthTokens";
import { PayloadType } from "../../types/User";

interface IGenerateTokenParams {
    userData: PayloadType,
    secretKey: string
    secretRefreshKey: string
}

export default function generateTokens({
    userData,
    secretKey, secretRefreshKey
}: IGenerateTokenParams) {
    // Пока токены одинаковые, в будущем сделаем нормальный рефреш

    const tokens: IAuthTokens = {
        access: jwt.sign(userData, secretKey, { expiresIn: "1m" }),
        refresh: jwt.sign(userData, secretRefreshKey, { expiresIn: "2m" })
    }

    return tokens;
}
