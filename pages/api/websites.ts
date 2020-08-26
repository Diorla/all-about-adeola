import data from "./data.json";

interface link {
  title: string;
  description: string;
  address: string;
  tags: string[];
}

interface links {
  status: (
    statusCode: number
  ) => {
    json: {
      (item: link[]): void;
    };
  };
}

export default (_req: any, res: links) => {
  res.status(200).json(data);
};
