import { RegisterFormSchema, RegisterFormState } from "@/lib/validations";

export async function register( state : RegisterFormState, formData : FormData){
    ///validate inputs
      const validatedFields = RegisterFormSchema.safeParse(Object.fromEntries(formData.entries()))
    ///check errors
    if(!validatedFields.success){
        return{
            errors : validatedFields.error.flatten().fieldErrors
        }
    }
}