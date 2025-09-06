import { uuid, text, pgTable, varchar, integer, numeric, boolean, timestamp } from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: uuid().primaryKey().defaultRandom(),

  title: varchar("title", { length: 255 }).notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  quantity: integer("quantity").notNull(),
  condition: varchar("condition", { length: 50 }).notNull(),
  yearOfManufacture: integer("year_of_manufacture"),
  brand: varchar("brand", { length: 100 }),
  model: varchar("model", { length: 100 }),
  dimensions: varchar("dimensions", { length: 100 }),
  weight: numeric("weight"),
  material: varchar("material", { length: 100 }),
  color: varchar("color", { length: 50 }),
  originalPackaging: boolean("original_packaging").default(false),
  manualIncluded: boolean("manual_included").default(false),
  workingConditionDescription: text("working_condition_description"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});
