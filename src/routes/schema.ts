import { z } from "zod";

export const formSchema = z
  .object({
    key_2a674a: z.coerce.number().gte(1).lte(99999).optional(),
    key_11deb6: z.boolean().optional(),
  })
  .strict();


export type FormSchema = typeof formSchema;
