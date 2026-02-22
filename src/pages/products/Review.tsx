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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

// Mock reviews data with string IDs
const initialReviews = [
  {
    id: "rev_001",
    product: "Samsung Galaxy-M1",
    customer: "Gage Pequette",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    published: true,
  },
  {
    id: "rev_002",
    product: "Tomato",
    customer: "Zachary Taylor",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    published: true,
  },
  {
    id: "rev_003",
    product: "Boston Round Cream Pack",
    customer: "Ollie Casper",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    published: true,
  },
  {
    id: "rev_004",
    product: "Woman Party Dress",
    customer: "Tony Richardson",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    published: true,
  },
  {
    id: "rev_005",
    product: "Tops for girl",
    customer: "Zach Marshall",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    published: true,
  },
  {
    id: "rev_006",
    product: "Casual Shirt for Man",
    customer: "Ken Matthews",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    published: true,
  },
  {
    id: "rev_007",
    product: "Blue Premium T-shirt",
    customer: "Nathan Clark",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    published: true,
  },
  {
    id: "rev_008",
    product: "Blue Jeans Pant",
    customer: "Bruce Reynolds",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    published: true,
  },
  {
    id: "rev_009",
    product: "Man Trowzer Pant",
    customer: "Gage Pequette",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    published: true,
  },
];

export default function ProductReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);

  const togglePublished = (id: string) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, published: !review.published } : review,
      ),
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          Product Reviews
        </h1>
      </div>

      {/* Reviews Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Reviews</CardTitle>
          <CardDescription>
            Manage customer reviews for your products.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Comment</TableHead>
                <TableHead>Published</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reviews.map((review) => (
                <TableRow key={review.id}>
                  <TableCell className="font-medium">
                    {review.product}
                  </TableCell>
                  <TableCell>{review.customer}</TableCell>
                  <TableCell className="max-w-md truncate">
                    {review.comment}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={review.published}
                        onCheckedChange={() => togglePublished(review.id)}
                      />
                      <Badge
                        variant={review.published ? "default" : "outline"}
                        className={
                          review.published
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : ""
                        }
                      >
                        {review.published ? "Published" : "Draft"}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() => togglePublished(review.id)}
                        >
                          {review.published ? "Unpublish" : "Publish"}
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
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
        </CardContent>
      </Card>
    </div>
  );
}
