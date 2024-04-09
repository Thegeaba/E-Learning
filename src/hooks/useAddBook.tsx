import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function useAddBook() {
  const [formData, setFormData] = useState<{
    docType: string;
    docTitle: string;
    description: string;
    file: string;
  }>({
    docType: '',
    docTitle: '',
    description: '',
    file: ''
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

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('docType', formData.docType);
      formDataToSend.append('docTitle', formData.docTitle);
      formDataToSend.append('description', formData.description);

      if (formData.file) {
        formDataToSend.append('file', formData.file);
      }

      const response = await fetch('http://localhost:5000/api/addBook', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Fail');
      }

      alert('Book added!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred during addBook');
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit
  };
}