import { auth } from "@clerk/nextjs/server";

export default async function setTree(treeData) {
  const { userId } = auth();

  const res = await fetch("http://localhost:3001/users" + userId, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(treeData),
  });

  return res.json();
}
