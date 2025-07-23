'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-shadow-sm">SignUp</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Create Your Account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="name" placeholder="your name" className="shadow-md shadow-gray-200" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" className="shadow-md shadow-gray-200" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            
          </div>
          <Input id="password" type="password" className="shadow-md shadow-gray-200" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
         <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Confirm Password</Label>
            
          </div>
          <Input id="password" type="password" className="shadow-md shadow-gray-200" value={confirmPassword} placeholder="********" onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <Button type="submit" className="w-full text-[14px] font-semibold  bg-blue-500 hover:bg-blue-600 rounded-[7px] text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] cursor-pointer [text-shadow:0px_0.5px_1px_rgba(0,0,0,0.25)]">
          SignUp
        </Button>
       
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a href="/login" className="underline underline-offset-4">
          Login
        </a>
      </div>
    </form>
  )
}
