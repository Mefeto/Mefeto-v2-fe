import type { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export default async function Sessions(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return await getTest(req, res);
    case "POST":
      return await addTest(req, res);
    default:
      return res.status(400).end(`Method Not Allowed`);
  }
}

const getTest = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { rows } = await sql`SELECT * FROM test;`;
  } catch (err: any) {
    return res.status(500).json({ err });
  }
};

const addTest = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name } = req.body;
    const result = await sql`INSERT INTO test (name) VALUES (${name});`;
    return res.status(200).json({ result });
  } catch (err: any) {
    return res.status(500).json({ err });
  }
};
