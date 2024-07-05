import { cookies } from "next/headers";

export default async function getUsers() {
  const res = await fetch("http://localhost:3001/users", {
    headers: {
      Cookie: cookies().toString(),
      "Content-Type": "application/json",
    },
  });
  return res.json();
}
