import Tree from "@/components/Tree";
import getUsers from "../actions/get-users";

import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function Home() {
  // const users = await getUsers();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-base-300 w-full'>
      <SignedIn>
        <Tree />
      </SignedIn>

      <SignedOut>
        <h1>Signed out</h1>
      </SignedOut>
    </main>
  );
}
