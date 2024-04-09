import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';


export default function useRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
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

  return {
    formData,
    handleChange,
    handleSubmit
  };
}