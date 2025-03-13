"use client";
import { login } from "@/actions/auth/login";
import { Stack, TextField, Box, Button } from "@mui/material";
import React, { useActionState } from "react";

function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  console.log("state", state);
  return (
    <form action={action}>
      <Stack gap={3} marginTop={2}>
        <TextField
          error={!!state?.errors.email}
          size="small"
          label="رایانامه"
          name="email"
          type="email"
          variant="outlined"
          helperText={state?.errors.email}
        />
        <TextField
          error={!!state?.errors.password}
          size="small"
          label="کلمه عبور"
          name="password"
          type="password"
          variant="outlined"
          helperText={state?.errors.password?.map((e: string) => (
            <Box component="span" display="block" key={e}>
              {e}
            </Box>
          ))}
        />
        <Button
          disabled={pending}
          type="submit"
          disableElevation
          variant="contained"
        >
          ورود
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm;
