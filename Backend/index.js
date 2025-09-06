import "dotenv/config";
import express from "express";


const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ status: "Server is running ..." });
});

app.listen(PORT, () => {
  console.log(`Server is running  on port:${PORT} `);
});