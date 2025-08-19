'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { SignIn } from './auth/sign-in-button'
import ThemeToggle from './theme-toggle'
import { Menu, ScanHeart, X } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'

function Header() {

  const navItems = [
    {href:"/features", label:"Features"},
    {href:"/about", label:"About SerenAI"}
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='w-full fixed top-0 z-50 bg-background  '>
        <div className='absolute inset-0 border-b border-primary/10'></div>
        <header className='relative max-w-7xl mx-auto px-4'>

            <div className='flex h-16 items-center justify-between'>
                <Link href="/" className='flex items-center gap-2'>
                <div className='flex gap-2 items-center '>
                  <Image src="/health.svg" alt='health' height={35} width={35} />
                <span className='text-xl font-semibold text-shadow-sm'>SerenAI</span>
                </div>
                </Link>

                <div className='flex items-center gap-4'>
                  <nav className='hidden md:flex items-center space-x-1'>
                    {navItems.map((item) => {
                      return (
                        <Link key={item.href}
                        href={item.href}
                        className='px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group'>
                          {item.label}
                          
                        </Link>
                      )
                    })}
                  </nav>


               
               <div className='flex items-center gap-3'>
                 <ThemeToggle />
                <SignIn className='text-[14px] font-semibold px-4 py-3 bg-[#8B004B] hover:bg-[#7e0244] rounded-[5px] text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] cursor-pointer [text-shadow:0px_0.5px_1px_rgba(0,0,0,0.25)]' /> 
                <Button variant="ghost" size="icon" className="md:hidden " onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? (
                    <X className='h-5 w-5' />
                  ): (
                    <Menu className='h-5 w-5' />
                  )}
                </Button>
            
               </div>
                </div>
            </div>
            {isMenuOpen && (
              <div className='md:hidden border-t border-primary/10'>
                <nav className='flex flex-col space-y-1 py-4'>
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href} className='
                    px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-md transition-colors' onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
        </header>

        </div>



  
  )
}

export default Header