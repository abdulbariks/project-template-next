import { z } from "zod";

export const apiSuccessSchema = z.object({
  success: z.literal(true),
  data: z.unknown(),
  message: z.string().optional(),
});

export const apiErrorSchema = z.object({
  success: z.literal(false),
  error: z.string(),
  details: z.unknown().optional(),
});
