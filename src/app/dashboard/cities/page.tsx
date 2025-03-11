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
} from "@mui/material";
import CityTable from "./city-table";
import { Suspense } from "react";

export default async function CitiesPage() {
  // getCities();
  return (
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
