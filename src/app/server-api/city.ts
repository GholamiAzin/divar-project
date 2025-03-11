import { cookies } from "next/headers";
import { BASE_URL } from "../../config.server";
import { Icity, PaginatedResultApi } from "./types";

export async function getCities():Promise<PaginatedResultApi<Icity>> {
  const accessToken = (await cookies()).get("accessToken")?.value;
  const data = await fetch(`${BASE_URL}/cities`,{
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    next:{
      tags: ["cities"],
    }
  }).then((res) => res.json());
  return data;
}
