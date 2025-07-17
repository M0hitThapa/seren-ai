'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
interface SignInButtonProps {
    className?: string
}

export function SignIn({className}: SignInButtonProps) {
  return (
    <Button asChild className={className}>
        <Link href="/login">SignIN</Link>

    </Button>
  )
}
