import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {auth,signIn,signOut} from '@/auth'
import { BadgePlus, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
export const Navbar = async() => {
    const session = await auth()
  
  return (
    <div className=' px-0 py-3 bg-white shadow-md text-white font-work-sans'>
    <nav className='flex justify-between items-center'>
 

        <Link href='/'>
            <Image src='/logo.png' width={144} height={10} alt='logo' />
        </Link>
        <div className='flex items-center gap-5 text-black'>
            {session && session.user ? (
                <>
                    <Link href='/startup/create'>
                        <span className='max-sm:hidden'>Create</span>
                        <BadgePlus className="size-6  sm:hidden "/>
                        
                    </Link>
                    <form action={async() => {
                        'use server'
                        await signOut({redirectTo:'/'})}}><button className='cursor-pointer max-sm:hidden ' type='submit'>Logout</button>
                        <LogOut className='size-6 sm:hidden text-red-500' />
                        </form>
                    <Link href={`/user/${session?.id }`}>
                        <Avatar className='size-10'>
                        <AvatarImage src={session?.user?.image || ''} alt={session?.user?.name || ''} className='rounded-full' />
                        <AvatarFallback>AV</AvatarFallback>
                        </Avatar>
                        
                    </Link>
                </>):(
                    <form action={async() => {
                        'use server'
                        await signIn('github')}}>
                            <button className='cursor-pointer'
                            type='submit'>
                                Login
                            </button>
                        </form>
                )}
        </div>
    </nav>
    
</div>
  )
}

export default Navbar
