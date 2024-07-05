import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(request) {
  const treeData = await request.json();

  const { userId } = auth();
  const res = await fetch(`http://localhost:3001/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ trees: treeData }),
  });

  return NextResponse.json(res.json());
}

export async function GET(request) {
  const { userId } = auth();
  const res = await fetch(`http://localhost:3001/users/${userId}`);
  return NextResponse.json(res.json());
}
