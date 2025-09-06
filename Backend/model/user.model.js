import { uuid, text, integer,pgTable, varchar, timestamp } from "drizzle-orm/pg-core";
import "dotenv/config";

export const usersTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),

  firstname: varchar("first_name", { length: 55 }).notNull(),
  lastname: varchar("last_name"),

  email: varchar("email", { length: 255 }).notNull().unique(),

  password: text().notNull(),
  salt: text().notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});



export const cartTable = pgTable("cart", {
  id: uuid().primaryKey().defaultRandom(), 
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id), 

  productId: uuid("product_id")
    .notNull()
    .references(() => productsTable.id), 

  quantity: integer("quantity").notNull().default(1), 

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});
