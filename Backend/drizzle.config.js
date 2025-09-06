import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle", //jab log pull krte he tab ata he is file me
  schema: "./model/index.js", //schema path
  dialect: "postgresql", //connection type
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
