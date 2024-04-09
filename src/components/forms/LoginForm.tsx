'use client'
import { Outlet, Link } from 'react-router-dom';
import useLogin from '@/hooks/useLogin';

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChangeEvent, FormEvent } from 'react';


export default function LoginForm() {
  const { formData, handleChange, handleSubmit} = useLogin();

  return (
    <>
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your email and password to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit = {handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail:</Label>
            <Input 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password:</Label>
            <Input 
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            type="password"
            required/>
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          You don't have an account?{" "}
          <Link to="/register" className="underline">
            Register now
          </Link>
        </div>
        </form>
      </CardContent>
    </Card>
      
    <Outlet />
    </>
  )
}