import usersTable from './user.model.js'

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
