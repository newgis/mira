import * as dotenv from "dotenv";
import IDotenvConfig from "../../types/DotenvConfig";

export default function getVerifySecretKeys() {
    const dotenvConfig = (dotenv.config().parsed as any) as IDotenvConfig;
    const secretKey = dotenvConfig?.SECRET_KEY || '';
    const secretRefreshKey = dotenvConfig?.SECRET_REFRESH_KEY || '';

    return { secretKey, secretRefreshKey };
}
