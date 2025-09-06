import "dotenv/config";
import express from "express";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
import { authenticationMiddleware } from "./middleware/auth.middleware.js";

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(authenticationMiddleware);
app.get("/", (req, res) => {
  return res.json({ status: "Server is running ..." });
});
app.use("/user", userRouter);


app.listen(PORT, () => {
  console.log(`Server is running  on port:${PORT} `);
});