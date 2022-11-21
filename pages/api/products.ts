import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    });
};

export default handler;
