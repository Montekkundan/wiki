"use client";

import { useUser, SignOutButton } from "@clerk/clerk-react";

import {
  Avatar,
  AvatarImage
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";
import { User } from "next-auth";
import { UserAvatar } from "@/components/UserAvatar";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, 'name' | 'image' | 'email'>
}

export const UserItem = ({ user }: UserAccountNavProps) => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div role="button" className="flex items-center text-sm p-3 w-full hover:bg-primary/5">
          <div className="gap-x-2 flex items-center max-w-[150px]">
          <UserAvatar
          user={{ name: user.name || null, image: user.image || null }}
          className='h-8 w-8'
        />
            <span className="text-start font-medium line-clamp-1">
              {user?.name}&apos;s wiki
            </span>
          </div>
          <Icons.chevronsLeftRight className=" rotate-90 ml-2 text-muted-foreground h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            {user?.email}
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1"> 
            <UserAvatar
          user={{ name: user.name || null, image: user.image || null }}
          className='h-8 w-8'
        />
            </div>
            <div className="space-y-1">
              <p className="text-sm line-clamp-1">
                {user?.name}&apos;s wiki
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="w-full cursor-pointer text-muted-foreground"
         onSelect={(event) => {
          event.preventDefault()
          signOut({
            callbackUrl: `${window.location.origin}/sign-in`,
          })
        }}>
          <Button>
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}