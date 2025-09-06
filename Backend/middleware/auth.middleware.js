import "dotenv/config";
import { validateUserToken } from "../utils/token.js";

/**
 * @param{import("express").Request} req
 * @param{import("express").Response} res
 * @param{import("express").NextFunction} next
 */
export function authenticationMiddleware(req, res, next) {
  const authHeader = req.headers["authorisation"];
  if (!authHeader) return next();

  if (!authHeader.startsWith("Bearer"))
    return res
      .status(400)
      .json({ error: `Authorisation header must start with  Bearer` });

  const [_, token] = authHeader.split(" "); //[Bearer, <Token>]

  const payload = validateUserToken(token);
  req.user = payload;
  next();
}

export function ensureAuthenticated(req, res, next) {
  if (!req.user || !req.user.id) {
    return res
      .status(401)
      .json({ error: "you must be logged in to access this resource" });
  }
  next();
}
