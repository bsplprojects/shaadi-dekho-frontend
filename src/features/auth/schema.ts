import { z } from "zod";

const emailSchema = z.email("Invalid email address").toLowerCase().trim();

const phoneSchema = z
  .string()
  .regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, "Invalid phone number");

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long");

export const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      "Invalid phone number",
    ),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const loginSchema = z
  .object({
    email: z.string().email("Invalid email").optional().or(z.literal("")),
    phone: z
      .string()
      .regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, "Invalid phone")
      .optional()
      .or(z.literal("")),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.email || data.phone, {
    message: "Email or phone is required",
    path: ["email"],
  });
