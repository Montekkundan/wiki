import Link from "next/link";
import {  buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { UserAccountNav } from "@/components/UserAccountNav";



export const Navbar = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className={cn(
      "container  bg-background  sticky top-0 flex items-center w-full p-6"
    )}>
      <Icons.logo />
      <p className="font-semibold">
        Wiki
      </p>
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
         {/* {isLoading && (
          <Spinner />
        )} */}

          <>
          {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href='/sign-in' className={buttonVariants()}>
            Sign In
          </Link>
        )}
          </>
 
        
      </div>
    </div>
  )
}