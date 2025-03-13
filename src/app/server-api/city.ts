import { BASE_URL } from "../../config.server";
import { Icity, PaginatedResultApi } from "./types";
import { auth } from "@/lib/sessions";

export async function getCities(): Promise<PaginatedResultApi<Icity>> {
  const { accessToken } = await auth();
  const data = await fetch(`${BASE_URL}/cities`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    next: {
      tags: ["cities"],
    },
  }).then((res) => res.json());
  return data;
}
