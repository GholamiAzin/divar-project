"use client";
import { register } from "@/actions/register";
import {
  Box,
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
  const [state, action, pending] = useActionState(register, undefined);
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
                error={!!state?.errors.firstName}
                fullWidth
                size="small"
                label="نام"
                name="firstName"
                variant="outlined"
                helperText={state?.errors.firstName}
              />
              <TextField
                error={!!state?.errors.lastName}
                fullWidth
                size="small"
                label="نام خانوادگی"
                name="lastName"
                variant="outlined"
                helperText={state?.errors.lastName}
              />
            </Stack>
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
              helperText={state?.errors.password?.map((e : string)=> (<Box component="span" display="block" key={e}>{e}</Box>))}
            />
            <Typography variant="caption">
              با ثبت نام در سرویس ما شما با همه قوانین سرویس موافقت خود را اعلام
              میدارید
            </Typography>
            <Button
              disabled={pending}
              type="submit"
              disableElevation
              variant="contained"
            >
              ثبت نام
            </Button>
          </Stack>
        </CardContent>
      </form>
    </Card>
  );
}

export default Register;
