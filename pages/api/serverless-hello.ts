import { NextApiRequest, NextApiResponse } from "next";

type HelloWorldData = {
  value: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<HelloWorldData>) => {
  const { type } = req.query;
  res.status(200).json({ value: "Hello World" });
};
