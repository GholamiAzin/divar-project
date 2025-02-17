import "server-only";
import { RegisterFormSchema, RegisterFormState } from "@/lib/validations";
import { createSession } from "@/lib/sessions";

const BASE_URL = process.env.BASE_URL;

export async function register(state: RegisterFormState, formData: FormData) {
  ///validate inputs
  const validatedFields = RegisterFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  ///check errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    const result = await fetch(`${BASE_URL}/auth/register`, {
      method: "post",
      body: JSON.stringify(validatedFields.data),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await result.json();
    if (!result.ok) {
      return {
        message: data.message,
        errors: data.errors,
      };
    } else {
      await createSession({
        accessToken: data.tokens.accessToken,
        refreshToken: data.tokens.refreshToken,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
