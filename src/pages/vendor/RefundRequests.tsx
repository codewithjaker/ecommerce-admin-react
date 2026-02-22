// app/refund-request/page.tsx
"use client";

import React from "react";
// import Image from "next/image";
import { 
  Eye, 
  Check, 
  Trash2, 
  ChevronRight 
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const refundRequests = [
  {
    orderNumber: "6ed34Edf65d",
    shopName: "The Beauty Shop",
    productName: "Samsung Galaxy-M1",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=100&q=80",
    amount: "$250",
    status: "Accepted",
  },
  {
    orderNumber: "6ed34Edf65d",
    shopName: "The Gainer",
    productName: "Boston Round Cream Pack",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=100&q=80",
    amount: "$350",
    status: "Processing",
  },
  {
    orderNumber: "6ed34Edf65d",
    shopName: "Tech Tube",
    productName: "Woman Party Dress",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&q=80",
    amount: "$342",
    status: "Pending",
  },
  {
    orderNumber: "6ed34Edf65d",
    shopName: "Smart HD",
    productName: "Top for Girls",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=100&q=80",
    amount: "$540",
    status: "Accepted",
  },
  {
    orderNumber: "6ed34Edf65d",
    shopName: "Dream Boy",
    productName: "Casual Shirt for Man",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&q=80",
    amount: "$236",
    status: "Accepted",
  },
  {
    orderNumber: "6ed34Edf65d",
    shopName: "Beyond Threads",
    productName: "Red Premium T-shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&q=80",
    amount: "$835",
    status: "Processing",
  },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Accepted":
      return "bg-emerald-100 text-emerald-600 border-none hover:bg-emerald-100";
    case "Processing":
      return "bg-sky-100 text-sky-600 border-none hover:bg-sky-100";
    case "Pending":
      return "bg-rose-100 text-rose-600 border-none hover:bg-rose-100";
    default:
      return "bg-slate-100 text-slate-600";
  }
};

export default function RefundRequestPage() {
  return (
    <div className="p-6 space-y-6 bg-[#F6F9FC] min-h-screen">
      <h1 className="text-xl font-bold text-slate-800">Refund Requests</h1>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 border-b border-slate-100">
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-semibold text-slate-600 pl-6">Order Number</TableHead>
              <TableHead className="font-semibold text-slate-600">Shop Name</TableHead>
              <TableHead className="font-semibold text-slate-600">Product Details</TableHead>
              <TableHead className="font-semibold text-slate-600">Amount</TableHead>
              <TableHead className="font-semibold text-slate-600">Status</TableHead>
              <TableHead className="font-semibold text-slate-600 text-right pr-6">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {refundRequests.map((request, index) => (
              <TableRow key={index} className="group hover:bg-slate-50/50 transition-colors">
                <TableCell className="font-mono text-slate-400 text-sm italic pl-6">
                  #{request.orderNumber}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {request.shopName}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 relative rounded-md overflow-hidden bg-slate-100 border border-slate-200">
                      <img
                        src={request.image} 
                        alt={request.productName} 
                        // fill 
                        className="object-cover"
                      />
                    </div>
                    <span className="font-bold text-slate-700 text-sm">
                      {request.productName}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {request.amount}
                </TableCell>
                <TableCell>
                  <Badge className={`px-2 py-0.5 rounded text-[11px] font-bold shadow-none ${getStatusStyles(request.status)}`}>
                    {request.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600">
                      <Eye size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-emerald-500">
                      <Check size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-rose-500">
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 p-6 border-t border-slate-50 bg-white">
          <Button variant="outline" size="icon" className="rounded-full w-8 h-8 border-[#0F172A] bg-[#0F172A] text-white hover:bg-[#1e293b] font-bold transition-all">
            1
          </Button>
          <Button variant="ghost" className="text-slate-400 hover:bg-transparent h-8 w-8 p-0 font-medium">2</Button>
          <Button variant="ghost" className="text-slate-400 hover:bg-transparent h-8 w-8 p-0 font-medium">3</Button>
          <Button variant="ghost" className="text-slate-400 hover:bg-transparent h-8 w-8 p-0 font-medium">4</Button>
          <Button variant="outline" size="icon" className="rounded-full w-8 h-8 text-slate-400 border-slate-200">
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}