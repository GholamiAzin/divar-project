"use server";
import "server-only";
import { LoginFormSchema, LoginFormState } from "@/lib/validations";
import { createSession } from "@/lib/sessions";
import { redirect } from "next/navigation";
import { BASE_URL } from "../config.server";

export async function login(state: LoginFormState, formData: FormData) {
  ///validate inputs
  const validatedFields = LoginFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  console.log(Object.fromEntries(formData.entries()));
  console.log("base_url\n\n\n\n\n", BASE_URL);
  ///check errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const result = await fetch(`${BASE_URL}/auth/login`, {
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
    return redirect("/dashboard");
  }
}
