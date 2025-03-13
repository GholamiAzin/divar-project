"use server";
import "server-only";
import { BASE_URL } from "@/config.server";
import { auth } from "@/lib/sessions";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const CityFormSchema = z.object({
  code: z.string().trim(),
  slug: z.string().trim(),
  name: z.string().trim(),
});

type CityFormState =
  | {
      errors?: {
        code?: string[];
        slug?: string[];
        name?: string[];
      };
      message?: string;
    }
  | undefined;

export async function createCity(state: CityFormState, formData: FormData) {
  const { accessToken } = await auth();
  if (!accessToken) {
    redirect("/auth/login");
  }
  const validatedFields = CityFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const res = await fetch(`${BASE_URL}/cities`, {
    method: "post",
    body: JSON.stringify(validatedFields.data),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    return {
      errors: data.errors,
      message: data.message,
    };
  }
  revalidateTag("cities");
  redirect("dashboard/cities");
}
