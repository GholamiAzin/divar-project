import { RegisterFormSchema, RegisterFormState } from "@/lib/validations";

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
    const result = await fetch("http://localhost:8000/auth/register", {
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
    }else{
        
    }
  } catch (error) {
    console.log(error);
  }
}
