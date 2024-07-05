import Tree from "@/components/Tree";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-base-300 w-full'>
      <Tree />
    </main>
  );
}
