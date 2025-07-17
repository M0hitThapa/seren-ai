import Link from 'next/link'
import React from 'react'
import { SignIn } from './auth/sign-in-button'
import ThemeToggle from './theme-toggle'

function Header() {
  return (
    <div className='w-full fixed top-0 z-50 bg-background/95 backdrop:blur-2xl'>
        <div className='absolute inset-0 border-b border-primary/10'>
        <header>

            <div>
                <Link href="/" className='flex items-center gap-2'>
                <span>Aura 3.0</span>
                </Link>
                <ThemeToggle />
                <SignIn />
            </div>
        </header>

        </div>



    </div>
  )
}

export default Header