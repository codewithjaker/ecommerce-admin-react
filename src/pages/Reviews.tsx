import { Trash2, ChevronRight, Star } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const reviewsData = [
  {
    id: 1,
    productName: "Samsung Galaxy-M1",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=100&q=80",
    customer: "Gage Paquette",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    rating: 5,
  },
  {
    id: 2,
    productName: "Tomato",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=100&q=80",
    customer: "Zachary Taylor",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    rating: 4,
  },
  {
    id: 3,
    productName: "Boston Round Cream Pack",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=100&q=80",
    customer: "Ollie Casper",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    rating: 5,
  },
  {
    id: 4,
    productName: "Woman Party Dress",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&q=80",
    customer: "Tony Richardson",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    rating: 5,
  },
  {
    id: 5,
    productName: "Tops for girl",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=100&q=80",
    customer: "Zach Marshall",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    rating: 5,
  },
  {
    id: 6,
    productName: "Casual Shirt for Man",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&q=80",
    customer: "Ken Matthews",
    comment: "But I must explain to you how all this of denouncing pleasure.",
    rating: 5,
  },
];

export default function ReviewsPage() {
  return (
    <div className="p-6 space-y-6 bg-[#F6F9FC] min-h-screen">
      <h1 className="text-xl font-bold text-slate-800 tracking-tight">Product Reviews</h1>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 border-b border-slate-100">
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-semibold text-slate-600 pl-6 py-4 text-sm">Name</TableHead>
              <TableHead className="font-semibold text-slate-600 py-4 text-sm">Customer</TableHead>
              <TableHead className="font-semibold text-slate-600 py-4 text-sm">Comment</TableHead>
              <TableHead className="font-semibold text-slate-600 py-4 text-sm">Ratings</TableHead>
              <TableHead className="font-semibold text-slate-600 text-right pr-6 py-4 text-sm">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviewsData.map((review) => (
              <TableRow 
                key={review.id} 
                className="group hover:bg-slate-50/50 transition-colors border-b border-slate-50 last:border-0"
              >
                <TableCell className="pl-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 relative rounded-md overflow-hidden bg-slate-100 border border-slate-200">
                      <img
                        src={review.image} 
                        alt={review.productName} 
                        // fill 
                        className="object-cover"
                      />
                    </div>
                    <span className="font-bold text-slate-700 text-sm">
                      {review.productName}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-500 font-medium py-4 text-sm">
                  {review.customer}
                </TableCell>
                <TableCell className="text-slate-500 font-medium py-4 text-sm max-w-[300px]">
                  &ldquo;{review.comment}&rdquo;
                </TableCell>
                <TableCell className="py-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-right pr-6 py-4">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-slate-400 hover:text-rose-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Bazaar Pagination */}
        <div className="flex items-center justify-center gap-2 p-6 border-t border-slate-50 bg-white">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full w-8 h-8 border-[#0F172A] bg-[#0F172A] text-white hover:bg-[#1E293B] hover:text-white font-bold transition-all shadow-sm"
          >
            1
          </Button>
          <Button variant="ghost" className="text-slate-400 hover:bg-slate-50 h-8 w-8 p-0 font-medium rounded-full">2</Button>
          <Button variant="ghost" className="text-slate-400 hover:bg-slate-50 h-8 w-8 p-0 font-medium rounded-full">3</Button>
          <Button variant="ghost" className="text-slate-400 hover:bg-slate-50 h-8 w-8 p-0 font-medium rounded-full">4</Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full w-8 h-8 text-slate-400 border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}