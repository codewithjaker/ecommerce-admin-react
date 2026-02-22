"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Search, MoreHorizontal } from "lucide-react";

// Mock brands data
const initialBrands = [
  {
    id: 1,
    name: "Samsung",
    logo: "/images/logos/samsung.png",
    featured: true,
  },
  {
    id: 2,
    name: "Brokeshire's",
    logo: "/images/logos/brokeshires.png",
    featured: true,
  },
  {
    id: 3,
    name: "Levis",
    logo: "/images/logos/levis.png",
    featured: true,
  },
  {
    id: 4,
    name: "Raymond",
    logo: "/images/logos/raymond.png",
    featured: true,
  },
  {
    id: 5,
    name: "Apple",
    logo: "/images/logos/apple.png",
    featured: true,
  },
  {
    id: 6,
    name: "Amazon",
    logo: "/images/logos/amazon.png",
    featured: true,
  },
  {
    id: 7,
    name: "Alibaba",
    logo: "/images/logos/alibaba.png",
    featured: true,
  },
  {
    id: 8,
    name: "ebay",
    logo: "/images/logos/ebay.png",
    featured: true,
  },
  {
    id: 9,
    name: "Lotto",
    logo: "/images/logos/lotto.png",
    featured: true,
  },
];

export default function BrandsPage() {
  const [brands, setBrands] = useState(initialBrands);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // for demo, show 5 per page

  // Filter brands based on search
  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Pagination
  const totalPages = Math.ceil(filteredBrands.length / itemsPerPage);
  const paginatedBrands = filteredBrands.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Toggle featured status
  const toggleFeatured = (id: number) => {
    setBrands((prev) =>
      prev.map((brand) =>
        brand.id === id ? { ...brand, featured: !brand.featured } : brand,
      ),
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Product Brands</h1>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search brands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Brands Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Brands</CardTitle>
          <CardDescription>
            Manage your product brands and their featured status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Logo</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedBrands.length > 0 ? (
                paginatedBrands.map((brand) => (
                  <TableRow key={brand.id}>
                    <TableCell className="font-medium">{brand.id}</TableCell>
                    <TableCell>{brand.name}</TableCell>
                    <TableCell>
                      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          // fill
                          sizes="32px"
                          className="object-contain p-1"
                          onError={(e) => {
                            // Fallback if logo fails
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Switch
                          checked={brand.featured}
                          onCheckedChange={() => toggleFeatured(brand.id)}
                        />
                        {brand.featured && (
                          <Badge
                            variant="default"
                            className="bg-green-100 text-green-800 hover:bg-green-100"
                          >
                            Featured
                          </Badge>
                        )}
                      </div>
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
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center py-8 text-muted-foreground"
                  >
                    No brands found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, filteredBrands.length)} of{" "}
                {filteredBrands.length} brands
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ),
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
