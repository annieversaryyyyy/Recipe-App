import { object, string, number } from "zod";
import { z } from "zod";


export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(6, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters")
});


export const ingredientSchema = z.object({
  name: string().min(1, "Название обязательно"),
  category: z.enum([
    "VEGETABLES",
    "FRUITS",
    "MEAT",
    "DAIRY",
    "SPICES",
    "OTHER",
  ]),

  unit: z.enum(["GRAMS", "KILOGRAMS", "LITERS", "MILLILITERS", "PIECES"]),

  pricePerUnit: z
  .number()
  .refine((val) => !isNaN(val), {
    message: "Цена должна быть числом",
  })
  .refine((val) => val >= 0, {
    message: "Цена должна быть положительной",
  })
  .nullable(),

  description: z.string().optional(),
});
