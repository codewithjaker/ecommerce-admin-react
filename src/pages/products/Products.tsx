import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Search, PlusCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";

// Product data with image paths (assumes images are in public/images/)
const products = [
  {
    id: "#6ed34Edf65d",
    sku: "#6ed34Edf65d",
    image: "/images/samsung_galaxy_m1.png",
    name: "Samsung Galaxy-M1",
    category: "Gadgets",
    brand: "Samsung",
    price: "$250",
    published: true,
  },
  {
    id: "#6ed34Edf65d",
    sku: "#6ed34Edf65d",
    image: "/images/tomato.png",
    name: "Tomato",
    category: "Grocery",
    brand: "Brookshire's",
    price: "$10/per kg",
    published: true,
  },
  {
    id: "#6ed34Edf65d",
    sku: "#6ed34Edf65d",
    image: "/images/boston_round_cream.png",
    name: "Boston Round Cream Pack",
    category: "Fashion",
    brand: "Levi's",
    price: "$24",
    published: false,
  },
  {
    id: "#6ed34Edf65d",
    sku: "#6ed34Edf65d",
    image: "/images/woman_party_dress.png",
    name: "Woman Party Dress",
    category: "Fashion",
    brand: "Raymond",
    price: "$35",
    published: true,
  },
  {
    id: "#6ed34Edf65d",
    sku: "#6ed34Edf65d",
    image: "/images/tops_for_girl.png",
    name: "Tops for girl",
    category: "Fashion",
    brand: "Raymond",
    price: "$16",
    published: false,
  },
  {
    id: "#6ed34Edf65d",
    sku: "#6ed34Edf65d",
    image: "/images/casual_shirt_man.png",
    name: "Casual Shirt for Man",
    category: "Fashion",
    brand: "Raymond",
    price: "$26",
    published: true,
  },
  {
    id: "#6ed34Edf65d",
    sku: "#6ed34Edf65d",
    image: "/images/blue_premium_tshirt.png",
    name: "Blue Premium T-shirt",
    category: "Fashion",
    brand: "Raymond",
    price: "$25",
    published: false,
  },
  {
    id: "#6ed34Edf65d",
    sku: "#6ed34Edf65d",
    image: "/images/blue_jeans_pant.png",
    name: "Blue Jeans Pant",
    category: "Fashion",
    brand: "Raymond",
    price: "$36",
    published: true,
  },
  {
    id: "#6ed34Edf65d",
    sku: "#6ed34Edf65d",
    image: "/images/man_trowzer_pant.png",
    name: "Man Trowzer Pant",
    category: "Fashion",
    brand: "Raymond",
    price: "$12",
    published: false,
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      {/* Header with title and actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Product List</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/browse-website">
              <Globe className="mr-2 h-4 w-4" />
              Browse Website
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/products/add">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New
            </Link>
          </Button>
        </div>
      </div>

      {/* Search and filter bar */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search products..." className="pl-10" />
        </div>
        <Button variant="outline" size="sm">
          Filter
        </Button>
      </div>

      {/* Products table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-muted rounded-md overflow-hidden flex-shrink-0 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        // fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {product.sku}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  {product.published ? (
                    <Badge
                      variant="default"
                      className="bg-green-100 text-green-800 hover:bg-green-100"
                    >
                      Published
                    </Badge>
                  ) : (
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    >
                      Draft
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
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
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
}
