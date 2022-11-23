import type { NextApiRequest, NextApiResponse } from "next";
import { baseUrl } from "./products";

type Data = {
  name: string;
};

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  return fetch(`${baseUrl}/products/categories`)
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    });
};

export default handler;
