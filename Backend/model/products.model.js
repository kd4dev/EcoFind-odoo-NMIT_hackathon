import { uuid, text, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";
import "dotenv/config";

export const productsTable = pgTable("products", {
  productId: uuid().primaryKey().defaultRandom(),

  productTitle: varchar("first_name", { length: 55 }).notNull(),
  lastname: varchar("last_name"),

  email: varchar("email", { length: 255 }).notNull().unique(),

  password: text().notNull(),
  salt: text().notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});
