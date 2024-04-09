import Image from "next/image"
import { Badge } from "@/components/ui/badge"
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
import { Button } from "@/components/ui/button"

export default function Row() {
  
    return (
        <TableRow>
        <TableCell className="hidden sm:table-cell">
            <Image
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="64"
            src="/images/documentType/book.jpg"
            width="64"
            />
        </TableCell>
        <TableCell className="font-medium">
            Nume Carte
        </TableCell>
        <TableCell>
            <Badge variant="outline">Active</Badge>
        </TableCell>
        <TableCell className="hidden md:table-cell">
            ??
        </TableCell>
        <TableCell className="hidden md:table-cell">
            25
        </TableCell>
        <TableCell className="hidden md:table-cell">
            2023-07-12 10:42 AM
        </TableCell>
        <TableCell className="hidden md:table-cell">
            2023-07-12 10:42 AM
        </TableCell>
        <TableCell>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                aria-haspopup="true"
                size="icon"
                variant="ghost"
                >
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </TableCell>
        </TableRow>
    )
}