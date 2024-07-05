import ThemeController from "@/components/ThemeController";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export const metadata = {
  title: "Tree",
  description: "A binary tree visualizer",
};

export default async function RootLayout({ children }) {
  const user = await currentUser();

  return (
    <ClerkProvider>
      <html lang='en'>
        <body className='bg-base-300 flex flex-col min-h-screen min-w-max w-full'>
          <nav className='flex gap-2 items-center justify-end p-4 sticky top-0 w-full bg-base-100 z-[2]'>
            <span className='mr-auto'>Tree Visualizer</span>
            <ThemeController />
            <SignedOut>
              <SignInButton className='btn btn-primary' />
            </SignedOut>
            <SignedIn>
              <UserButton />
              <span>
                {user?.fullName || user?.emailAddresses[0].emailAddress}
              </span>
            </SignedIn>
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

