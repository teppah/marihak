import { NextApiRequest, NextApiResponse } from "next";

type HelloWorldData = {
  value: string;
};

function delay(t, val) {
  return new Promise(function(resolve) {
      setTimeout(function() {
          resolve(val);
      }, t);
  });
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<HelloWorldData>
) => {
  const { type } = req.query;
  await delay(400, null);
  res.status(200).end(JSON.stringify({ value: "Hello World, that happens on the server (serverless)!!" }));
};
