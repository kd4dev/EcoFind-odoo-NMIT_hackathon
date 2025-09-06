import { randomBytes, createHmac } from "crypto";
import "dotenv/config";
export function hashPasswordWithSalt(password,userSalt=undefined){
      const salt = userSalt ?? randomBytes(256).toString("hex");
      const hashedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

    return {salt,password:hashedPassword}
}