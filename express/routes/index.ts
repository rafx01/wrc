import { Router } from "express";
import insertDb from "../handlers/insertDb";

const router = Router();

router.get("/insertdb", insertDb);
router.get("/", (_, res) => {
  return res.status(200).send({ STATUS: 200 });
});

export { router };
