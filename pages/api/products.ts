import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};
export const baseUrl = "https://fakestoreapi.com";
const handler = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  return fetch(`${baseUrl}/products`)
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data);
    });
};

export default handler;
