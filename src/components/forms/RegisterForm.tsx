import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';
import useRegister from '@/hooks/useRegister';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterForm() {
  const { formData, handleChange, handleSubmit} = useRegister();
  
  return (
    <>

<Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Max"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Robinson"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                required
              />

              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type="password"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
    <Outlet />
    </>
  )
}