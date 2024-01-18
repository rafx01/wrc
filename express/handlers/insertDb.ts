import { Request, Response } from "express";

export default function insertDb(req: Request, res: Response) {
  try {
    console.log("funcionando legal");
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
