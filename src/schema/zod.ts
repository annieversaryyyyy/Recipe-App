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

export const ingredientSchema = object({
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
    .number({
      invalid_type_error: "Цена должна быть числом",
      required_error: "Цена обязательна",
    })
    .min(0, { message: "Цена должна быть положительной" })
    .nullable(),

  description: z.string().optional(),
});
