"use client"
import { register } from "@/actions/register";
import {
  Button,
  Card,
  CardContent,
  Link as MuiLink,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useActionState } from "react";


function Register() {
  const [state, action, pending] = useActionState(register,undefined)
  return (
    <Card sx={{ width: 500 }} elevation={8}>
      <form action={action}>
        <CardContent sx={{ padding: 4 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">ثبت نام</Typography>
            <MuiLink component={Link} href="/auth/login">
              قبلا ثبت نام کرده اید؟
            </MuiLink>
          </Stack>
          <Stack gap={3}>
            <Stack
              mt={2}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={1}
            >
              <TextField
                fullWidth
                size="small"
                label="نام"
                name="firstName"
                variant="outlined"
              />
              <TextField
                fullWidth
                size="small"
                label="نام خانوادگی"
                name="lastName"
                variant="outlined"
              />
            </Stack>
            <TextField size="small" label="رایانامه" name="email" type="email" variant="outlined" />
            <TextField size="small" label="کلمه عبور" name="password" type="password" variant="outlined" />
            <Typography variant="caption">
              با ثبت نام در سرویس ما شما با همه قوانین سرویس موافقت خود را اعلام
              میدارید
            </Typography>
            <Button disabled={pending} type="submit" disableElevation variant="contained">
              ثبت نام
            </Button>
          </Stack>
        </CardContent>
      </form>
    </Card>
  );
}

export default Register;
