import { z } from "zod";

export const RegisterFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "حداقل ۲ کاراکتر وارد کنید." })
    .trim(),
  lastName: z.string().min(2, { message: "حداقل ۲ کاراکتر وارد کنید." }).trim(),
  email: z.string().email({ message: "لطفا ایمیل معتبر وارد کنید." }).trim(),
  password: z
    .string()
    .min(8, { message: "حداقل ۸ کاراکتری باشد." })
    .regex(/[a-zA-Z]/, { message: "شامل یک حرف باشد." })
    .regex(/[0-9]/, { message: "شامل یک عدد باشد." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "شامل یکی از کارکترهای خاص (! @ # $ ...) باشد.",
    })
    .trim(),
});

export type RegisterFormState =
  | {
      errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
