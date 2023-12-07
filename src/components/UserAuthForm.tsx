"use client"
import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import * as React from 'react'
import { FC } from 'react'

import { Button } from './ui/button'
import { toast } from 'sonner'
import { Icons } from './icons'


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const loginWithMicrosoft = async () => {
    setIsLoading(true)

    try {
      await signIn('azure-ad',{ callbackUrl: "/dashboard" })
    } catch (error :any) {
      console.error(error)
        toast.error(error.message)

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button
        isLoading={isLoading}
        type='button'
        size='sm'
        className='w-full'
        onClick={loginWithMicrosoft}
        disabled={isLoading}>
        {isLoading ? null : <Icons.microsoft className='h-4 w-4 mr-2' />}
        Microsoft
      </Button>
    </div>
  )
}

export default UserAuthForm