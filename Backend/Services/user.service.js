//crud level operations

import db from "../db/index.js";
import { eq } from "drizzle-orm";
import { usersTable } from "../model/user.model.js";



export async function getUserByEmail(email)
{
   const[existingUser]=await db
    .select({
        id:usersTable.id,
        firstname:usersTable.firstname,
        lastname:usersTable.lastname,
        email:usersTable.email,
        salt:usersTable.salt,
        password:usersTable.password
    })
    .from(usersTable)
    .where(eq(usersTable.email, email));

    return existingUser;
}

export async function createUser({ email, firstname, lastname, salt, password }) {
  const [user] = await db
    .insert(usersTable)
    .values({ email, firstname, lastname, salt, password })
    .returning({ id: usersTable.id });
  return user; 
}
