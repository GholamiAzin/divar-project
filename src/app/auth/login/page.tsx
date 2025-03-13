import LoginForm from "@/components/forms/login-form";
import { Card, CardContent, Stack, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";

function Login() {
  return (
    <Card sx={{ width: 500 }} elevation={8}>
      <CardContent sx={{ padding: 4 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">ورود</Typography>
          <MuiLink component={Link} href="/auth/register">
           ساخت حساب کاربری
          </MuiLink>
        </Stack>
        <LoginForm/>
      </CardContent>
    </Card>
  );
}

export default Login