import { FastifyReply, FastifyRequest } from "fastify";
import { ErrorReply, SuccessReply } from "../../helpers/ServerReply";
import savedToken, { actualToken } from "../Auth/models/savedToken";
import axios from "axios";

export default async function getTracks(
  request: FastifyRequest,
  reply: FastifyReply
) {
  let user_data, leads_data;
  console.log(`Bearer ${actualToken}`);
  if (!savedToken[savedToken.length - 1])
    return ErrorReply({ reply, data: { error: "Set actual token", code: 500 } });
  await axios
    .get(
      `https://infomiralogisticsglobalcom.amocrm.ru/api/v2/contacts?query=${
        (request.query as any).phone
      }`,
      {
        headers: {
          Authorization: `Bearer ${savedToken[savedToken.length - 1]}`,
        },
      }
    )
    .then(async (response) => {
      if (!(request.query as any).phone)
        return ErrorReply({ reply, data: { error: "Input phone", code: 404 } });
      user_data = response.data._embedded;
      await axios
        .get(
          `https://infomiralogisticsglobalcom.amocrm.ru/api/v2/leads?id=${response.data._embedded.items[0].leads.id.toString()}`,
          {
            headers: {
              Authorization: `Bearer ${savedToken[savedToken.length - 1]}`,
            },
          }
        )
        .then((e) => {
          leads_data = e.data._embedded;
        }).catch((e) => {
          return ErrorReply({ reply, data: { error: "Error API", code: 500 } });
        });
    }).catch((e) => {
      return ErrorReply({ reply, data: { error: "Error API", code: 500 } });
    });

  return SuccessReply({
    reply,
    data: { message: "successfully", data: { user_data, leads_data } },
  });
}
