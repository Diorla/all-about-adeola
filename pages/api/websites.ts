import { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";

interface Link {
  title: string;
  description: string;
  address: string;
  tags: string[];
}

export default (_req: NextApiRequest, res: NextApiResponse<Link[]>) => {
  res.status(200).json(data);
};
