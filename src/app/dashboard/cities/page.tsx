// import { getCities } from "@/app/server-api/city";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Skeleton,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import CityTable from "../../../components/tables/city-table";
import { Suspense } from "react";
import { getCities } from "@/app/server-api/city";
import Link from "next/link";

export default async function CitiesPage() {
  getCities();
  return (
    <Box>
      <Paper>
        <Toolbar>
          <Typography variant="h5" sx={{ flex: "1 1 100%" }}>
            شهرها
          </Typography>
          <Button
            component={Link}
            href="cities/create"
            sx={{ flexShrink: 0 }}
            variant="contained"
          >
            شهر جدید
          </Button>
        </Toolbar>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>شناسه</TableCell>
                <TableCell>کد شهر</TableCell>
                <TableCell>نام فارسی</TableCell>
                <TableCell>شناسه کد</TableCell>
                <TableCell>تاریخ ساخت</TableCell>
                <TableCell>آخرین به‌روزرسانی</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Suspense fallback={<CityTableLoading />}>
                <CityTable />
              </Suspense>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

const CityTableLoading = () => (
  <TableRow>
    <TableCell>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </TableCell>
    <TableCell>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </TableCell>
    <TableCell>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </TableCell>
    <TableCell>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </TableCell>
    <TableCell>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </TableCell>
    <TableCell>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </TableCell>
  </TableRow>
);
