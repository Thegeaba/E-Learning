import Image from "next/image"
import { Outlet, Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import AddBookRow from "@/components/admin/AddBookRow";

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
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

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Button } from "@/components/ui/button"

export default function AddBookPanel() {
  
  return (
    <>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Documents</CardTitle>
            <CardDescription>
              Add books or articles here.
            </CardDescription>
          </CardHeader>
          <CardContent>

                <AddBookRow></AddBookRow>

          </CardContent>
        </Card>
      </main>
    <Outlet />
    </>
  )
}
