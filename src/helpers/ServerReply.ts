import { FastifyReply } from "fastify";

interface IServerReply<T> {
  reply: FastifyReply;
  cookie?: string;
  data: {
    message: string | null;
    error: string | null;
    code: number;
    data: T;
  };
}

export function ServerReply<T>({ reply, data }: IServerReply<T>) {
  reply.statusCode = data.code;
  return data;
}

export function ServerReplyWithCookie<T>({
  reply,
  data,
  cookie,
}: IServerReply<T>) {
  reply.statusCode = data.code;
  cookie && reply.setCookie("refresh", cookie, { path: '/' });
  return data;
}

export function SuccessReply({
  reply,
  data,
  cookie,
}: {
  reply: FastifyReply;
  cookie?: string;
  data: { message: string; data: any };
}) {
  if (cookie) {
    return ServerReplyWithCookie<any>({
      reply,
      cookie,
      data: {
        message: data.message,
        error: null,
        code: 200,
        data: data.data,
      },
    });
  }

  return ServerReply<any>({
    reply,
    data: {
      message: data.message,
      error: null,
      code: 200,
      data: data.data,
    },
  });
}

export function ErrorReply({
  reply,
  data,
}: {
  reply: FastifyReply;
  data: { error: string; code: number };
}) {
  console.log(data.error);
  return ServerReply<null>({
    reply,
    data: {
      message: null,
      error: data.error,
      code: data.code,
      data: null,
    },
  });
}
