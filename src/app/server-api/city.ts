import { BASE_URL } from "../../config.server";
import { Icity, PaginatedResultApi } from "./types";

export async function getCities():Promise<PaginatedResultApi<Icity>> {
  const data = await fetch(`${BASE_URL}/cities`).then((res) => res.json());
  return data;
}
