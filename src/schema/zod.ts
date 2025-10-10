import { object, string, number } from "zod";
import { z } from "zod";

export const signInSchema = object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 8 characters long" }),
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
