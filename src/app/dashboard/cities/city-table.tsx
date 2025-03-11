import { getCities } from "@/app/server-api/city";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default async function CityTable() {
  const cities = await getCities();
  console.log(cities);
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
          {cities.results.map((city) => (
            <TableRow key={city.id}>
              <TableCell>{city.id}</TableCell>
              <TableCell>{city.code}</TableCell>
              <TableCell>{city.name}</TableCell>
              <TableCell>{city.slug}</TableCell>
              <TableCell>{city.createdAt}</TableCell>
              <TableCell>{city.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
