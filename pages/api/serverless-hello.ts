import { NextApiRequest, NextApiResponse } from "next";

type HelloWorldData = {
  value: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<HelloWorldData>) => {
  const { type } = req.query;
  res.status(200).end(JSON.stringify({value: "Hello World"}));
};
