import Tree from "@/components/Tree";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <main className=''>
      <SignedIn>
        <Tree />
      </SignedIn>

      <SignedOut>
        <div className='grid place-items-center  w-full '>
          <div className='max-w-6xl py-24 px-4 content-center text-center justify-center'>
            <h2 className='text-3xl  text-center font-bold'>
              Start visualizing your tree now
            </h2>
            <SignInButton className='btn mt-12 btn-primary inline-block px-12 normal-case'>
              Get Started
            </SignInButton>
          </div>
        </div>
      </SignedOut>
    </main>
  );
}
