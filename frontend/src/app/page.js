import Tree from "@/components/Tree";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-base-300 w-full'>
      <SignedIn>
        <Tree />
      </SignedIn>

      <SignedOut>
        <>
          <div className='grid place-items-center  w-full '>
            <div className='max-w-6xl py-24 px-4 content-center text-center justify-center'>
              <h2 className='text-3xl  text-center font-bold'>
                Start visualizing your tree now
              </h2>
              <button className='btn mt-12 btn-primary inline-block px-12 normal-case'>
                Get Started
              </button>
            </div>
          </div>
        </>
      </SignedOut>
    </main>
  );
}
