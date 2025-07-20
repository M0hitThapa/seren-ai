'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { SignIn } from './auth/sign-in-button'
import ThemeToggle from './theme-toggle'
import { Menu, ScanHeart, X } from 'lucide-react'
import { Button } from './ui/button'

function Header() {

  const navItems = [
    {href:"/features", label:"Features"},
    {href:"/about", label:"About SerenAI"}
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='w-full fixed top-0 z-50 bg-background/95 backdrop:blur-2xl'>
        <div className='absolute inset-0 border-b border-primary/10'></div>
        <header className='relative max-w-6xl mx-auto px-4'>

            <div className='flex h-16 items-center justify-between'>
                <Link href="/" className='flex items-center gap-2'>
                <div className='flex flex-col'>
                  <ScanHeart />
                <span>SerenAI</span>
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
                <SignIn /> 
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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