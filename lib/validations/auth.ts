import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters.")
      .max(100),

    email: z
      .email("Please enter a valid email address.")
      .transform((email) => email.toLowerCase()),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(100),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export const LoginSchema = z.object({
  email: z
    .email("Please enter a valid email address.")
    .transform((email) => email.toLowerCase()),

  password: z.string().min(1, "Password is required."),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;