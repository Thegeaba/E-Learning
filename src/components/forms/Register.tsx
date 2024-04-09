import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {Card} from "@/components/ui/card"

import { useState } from "react"
import { ChangeEvent, FormEvent } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verificare dacă parola este confirmată
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Trimite datele către serverul Flask
    try {
      const response = await fetch('http://localhost:5000/api/create_account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      if (!response.ok) {
        throw new Error('Registration failed');
      }
    
      alert('Registration successful!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred during registration');
    }
  };

  return (
    <Card className="w-[450px] h-[530px]">
      <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Create an account</h1>
      </div>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            type="password"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            type="password"
            required
          />
        </div>
        <div className="space-y-2">
          <Checkbox
            id="terms"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <Label className="ml-2 text-sm leading-none" htmlFor="terms">
            I agree to the <u>terms and conditions</u>
          </Label>
        </div>
        <Button type="submit" className="w-full">Register</Button>
      </form>
    </Card>
  );
}