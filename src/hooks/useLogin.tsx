import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  // AICI
  const navigate = useNavigate();

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Trimite datele către serverul Flask
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      if (!response.ok) {
        throw new Error('Failed Login');
      }
    
      alert('Successful Login!');
      
      // AICI
      navigate('/admin-panel');

    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred during login');
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit
  };
}