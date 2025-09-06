import { getUserByEmail ,createUser} from "../services/user.service.js";
import { hashPasswordWithSalt } from "../utils/hash.js";
import { createUserToken } from "../utils/token.js";
import db from '../db/index.js'
import { productsTable } from "../model/index.js"; 
import {
  signupPostRequestSchema,
  loginPostRequestSchema,
} from "../validations/request.validation.js";

export const signupController = async function (req, res) {
  const validationResult = await signupPostRequestSchema.safeParseAsync(
    req.body
  );

  if (validationResult.error) {
    return res.status(400).json({ error: validationResult.error.format() });
  }
  const { firstname, lastname, email, password } = validationResult.data;


  const existingUser = await getUserByEmail(email);
  if (existingUser)
    return res.status(400).json({ error: `User with email:${email} exist!` });

  const { salt, password: hashedPassword } = hashPasswordWithSalt(password);

  const user = await createUser({
    email,
    firstname,
    lastname,
    salt,
    password: hashedPassword,
  });

  return res.status(201).json({status:"Success"})
};

export const loginController = async function (req, res) {
  const validationResult = await loginPostRequestSchema.safeParseAsync(
    req.body
  );
  if (validationResult.error) {
    return res.status(400).json({ error: validationResult.error.format() });
  }

  const { email, password } = validationResult.data;
  const user = await getUserByEmail(email);
  if (!user) {
    return res
      .status(404)
      .json({ error: `User with email:${email} dont exists` });
  }

  const { password: hashedPassword } = await hashPasswordWithSalt(
    password,
    user.salt
  );
  if (user.password !== hashedPassword) {
    return res.status(400).json({ error: `Invalid password` });
  }
  // const payload={
  //     id:user.id
  // }

  const token =await createUserToken({id:user.id});
  return res.json({ token });
};

export const addToCartController = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity) {
      return res.status(400).json({ message: "userId, productId and quantity are required" });
    }

    const product = await db.select().from(productsTable).where(productsTable.id.eq(productId));
    if (!product.length) {
      return res.status(404).json({ message: "Product not found" });
    }

    const existingItem = await db
      .select()
      .from(cartTable)
      .where(cartTable.userId.eq(userId))
      .where(cartTable.productId.eq(productId));

    if (existingItem.length) {
      await db
        .update(cartTable)
        .set({ quantity: existingItem[0].quantity + quantity })
        .where(cartTable.id.eq(existingItem[0].id));
      return res.status(200).json({ message: "Cart updated successfully" });
    } else {
      await db.insert(cartTable).values({
        userId,
        productId,
        quantity,
      });
      return res.status(201).json({ message: "Product added to cart" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};