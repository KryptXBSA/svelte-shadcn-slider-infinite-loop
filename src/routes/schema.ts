import { z } from "zod";

export const formSchema = z
  .object({ key_2a674a: z.coerce.number().optional() })
  .strict();


export type FormSchema = typeof formSchema;
