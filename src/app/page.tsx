"use client"

import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import ThemeToggle from "@/components/theme/ThemeToggle";
import LoginForm from "@/components/forms/LoginForm";
import Authentication from "@/components/forms/Register";
import Chat from "@/components/profile/chat";
import LessonCard from "@/components/Classroom/LessonCard";
import { Dashboard } from "@/components/profile/profile";
import RegisterForm from "@/components/forms/RegisterForm";
import AdminPanel from "@/components/admin/AdminPanel";
import AddBook from "@/components/admin/AddBookPanel";
import Register from "@/components/forms/Register";

// In cazul in care .next nu mai functioneaza:
// 1. Delete .next
// 2. npm run dev
// 3. Gata! Merge.

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <BrowserRouter>
      <Routes>
        <Route index element={<AdminPanel />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
    </main>
  );
}
