import * as React from "react"
import { ChangeEvent, useState } from 'react';

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {
    File,
    Home,
    LineChart,
    ListFilter,
    MoreHorizontal,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Users2,
  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Outlet, Link } from 'react-router-dom';
import useAddBook from '@/hooks/useAddBook';


export default function AddBookRow() {
  const { formData, handleChange, handleSubmit } = useAddBook();
  const [docType, setDocType] = useState('');

  const handleDocTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };


  
  return (
    <>
      <form onSubmit={handleSubmit}>

      <div>
          <h2>Valori introduse:</h2>
          <p>Document Type: {formData.docType}</p>
          <p>Document Title: {formData.docTitle}</p>
          <p>Description: {formData.description}</p>
          <p>File Path: {formData.file}</p>
      </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Document type</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Choose Document Type</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={docType} onChange={handleDocTypeChange}>
              <DropdownMenuRadioItem value="book">Book</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="article">Article</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="other">Other</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          type="text"
          name="docTitle"
          placeholder="Document name"
          value={formData.docTitle}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="description"
          placeholder="Document description"
          value={formData.description}
          onChange={handleChange}
        />
        <Input
          id="import"
          type="file"
          name="file"
          accept=".pdf"
          onChange={(e) => handleChange({ target: e.target } as ChangeEvent<HTMLInputElement>)}
        />
        <Button className="h-8 gap-1" type="submit">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Document
          </span>
        </Button>
      </form>
      <Outlet />
    </>
  );
}
