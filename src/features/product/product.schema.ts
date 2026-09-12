import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().positive("Price must be positive"),
  category: z.string().min(1, "Category is required"),
  stock: z.number().int().min(0, "Stock must be non-negative"),
  images: z.array(z.string().url()).optional(),
  isActive: z.boolean().optional(),
});

export type ProductInput = z.infer<typeof productSchema>;
