"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Plus, MoreHorizontal } from "lucide-react";
// import Image from "next/image";

// Mock data based on the image with featured flag
const initialCategories = [
  {
    id: "1",
    name: "Samsung Galaxy-M1",
    category: "Gadgets",
    banner: "/images/banners/banner1.jpg",
    level: 0,
    featured: true,
  },
  {
    id: "2",
    name: "Tomato",
    category: "Grocery",
    banner: "/images/banners/banner2.jpg",
    level: 1,
    featured: false,
  },
  {
    id: "3",
    name: "Boston Round Cream Pack",
    category: "Fashion",
    banner: "/images/banners/banner3.jpg",
    level: 0,
    featured: false,
  },
  {
    id: "4",
    name: "Woman Party Dress",
    category: "Fashion",
    banner: "/images/banners/banner4.jpg",
    level: 0,
    featured: true,
  },
  {
    id: "5",
    name: "Tops for girl",
    category: "Fashion",
    banner: "/images/banners/banner5.jpg",
    level: 0,
    featured: false,
  },
  {
    id: "6",
    name: "Casual Shirt for Man",
    category: "Fashion",
    banner: "/images/banners/banner6.jpg",
    level: 0,
    featured: false,
  },
  {
    id: "7",
    name: "Blue Premium T-shirt",
    category: "Fashion",
    banner: "/images/banners/banner7.jpg",
    level: 0,
    featured: false,
  },
  {
    id: "8",
    name: "Blue Jeans Pant",
    category: "Fashion",
    banner: "/images/banners/banner8.jpg",
    level: 0,
    featured: false,
  },
  {
    id: "9",
    name: "Man Trowzer Pant",
    category: "Fashion",
    banner: "/images/banners/banner9.jpg",
    level: 0,
    featured: false,
  },
];

export default function ProductCategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState(initialCategories);

  // Filter categories based on search term (name or category)
  const filteredCategories = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleFeatured = (id: string) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, featured: !cat.featured } : cat
      )
    );
  };

  const handleDelete = (id: string) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  };

  const handleEdit = (id: string) => {
    // In a real app, you'd navigate to an edit page or open a modal
    console.log("Edit category", id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Product Categories</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Categories
        </Button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search Categories"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="secondary" onClick={() => setSearchTerm("")}>
          Search
        </Button>
      </div>

      {/* Categories Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Categories</CardTitle>
          <CardDescription>Manage your product categories and banners.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Banner</TableHead>
                <TableHead className="text-center">Level</TableHead>
                <TableHead className="text-center">Featured</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat) => (
                  <TableRow key={cat.id}>
                    <TableCell className="font-medium">{cat.name}</TableCell>
                    <TableCell>{cat.category}</TableCell>
                    <TableCell>
                      <div className="relative w-12 h-12 rounded-md overflow-hidden border">
                        <img
                          src={cat.banner}
                          alt={cat.name}
                          // fill
                          sizes="48px"
                          className="object-cover"
                          onError={(e) => {
                            // Fallback if image fails to load
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{cat.level}</TableCell>
                    <TableCell className="text-center">
                      <Switch
                        checked={cat.featured}
                        onCheckedChange={() => handleToggleFeatured(cat.id)}
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleEdit(cat.id)}>
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleDelete(cat.id)}
                            className="text-red-600"
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No categories found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}