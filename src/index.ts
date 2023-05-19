import Fastify from "fastify";
import cookie, { FastifyCookieOptions } from "@fastify/cookie";
import connectDatabase from "./database/connect";
import parseJson from "./helpers/hooks/parseJson";
import authMiddleware from "./middleware/Auth";
import login from "./processes/Auth/models/login";
import registerUser from "./processes/Auth/models/register";
import * as dotenv from "dotenv";
import IDotenvConfig from "./types/DotenvConfig";
import refreshTokens from "./processes/Auth/models/refreshTokens";
import getData from "./processes/Auth/models/getData";
import sendReview from "./processes/Auth/models/sendReview";
import leaveRequest from "./processes/Auth/models/leaveRequest";
import getToken from "./processes/Auth/models/getToken";
import setToken from "./processes/Auth/models/setToken";
import getTracks from "./processes/Track/getTrack";

const port = 5500;

const config = { logger: true };

const app = Fastify(config);
app.register(cookie, {
  secret: "sit", // for cookies signature
  parseOptions: {}, // options for parsing cookies
} as FastifyCookieOptions);

app.addHook("onRequest", parseJson);

// TODO: FIX MIDDLEWARE
// app.addHook("onRequest", authMiddleware);

app.addHook("onError", async (request, reply, error, done) => {
  console.log(error);
  done();
});

// Routes
app.post("/auth/signin", login);

app.post("/auth/signup", registerUser);

app.post("/auth/refreshTokens", refreshTokens);

app.get("/getData", getData);

app.post("/sendReview", sendReview);

app.post("/leaveRequest", leaveRequest);

app.post("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.send({ Hei: "ddd1" });
});

app.post("/setToken", setToken);

app.get("/getToken", getToken);

app.get("/getTracks", getTracks);

const bootstrap = async () => {
  try {
    app.listen({
      port: port,
      host: "0.0.0.0",
    });
    app.log.info(`Server is running on http://0.0.0.0:${port}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }

  try {
    const dotenvConfig = dotenv.config().parsed as any as IDotenvConfig;
    await connectDatabase(dotenvConfig.MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    app.log.error("Database connection error");
    app.log.error(error);
  }
};

bootstrap();
