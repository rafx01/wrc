import express from "express";
import { router } from "../routes";
import { createServer } from "http";

const app = express();
const port = 4501;

app.use(express.json());
app.use(router);

const server = createServer(app);

server.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
