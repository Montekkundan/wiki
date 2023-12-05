"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";



export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className={cn(
      "container z-50 bg-background  sticky top-0 flex items-center w-full p-6"
    )}>
      <Icons.logo />
      <p className="font-semibold">
        Wiki
      </p>
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
         {isLoading && (
          <Spinner />
        )}
        {!isAuthenticated && !isLoading && ( 
          <>
             <SignInButton mode="modal">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </SignInButton>
          </>
         )} 
         {isAuthenticated && !isLoading && ( 
          <>
            <Button  size="sm" asChild>
              <Link href="/documents">
                Enter
              </Link>
            </Button>
            <UserButton
              afterSignOutUrl="/"
            /> 
          </>
        )}
      </div>
    </div>
  )
}