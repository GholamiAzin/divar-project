import { createCity } from "@/actions/city";
import { Button, Stack, TextField } from "@mui/material";
import { useActionState } from "react";

export const CreateCityForm = () => {
  const [state, action, pending] = useActionState(createCity, undefined);
  console.log("state", state);
  return (
    <form action={action}>
      <Stack spacing={2} mt={2}>
        <TextField fullWidth name="code" label="پیش شماره" />
        <TextField fullWidth name="slug" label="اسلاگ" />
        <TextField fullWidth name="name" label="نام شهر" />
        <Button variant="contained" type="submit" disabled={pending}>
          ایجاد شهر
        </Button>
      </Stack>
    </form>
  );
};
