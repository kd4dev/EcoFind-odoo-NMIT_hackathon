import { z } from "zod";

export const userTokenSchema = z.object({
  id: z.string(),
});
