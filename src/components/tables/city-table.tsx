import { getCities } from "@/app/server-api/city";
import {
  TableCell,
  TableRow,
} from "@mui/material";

export default async function CityTable() {
  const cities = await getCities();
  console.log(cities);
  return (
    <>
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
    </>
  );
}
