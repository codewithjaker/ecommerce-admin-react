// app/customers/page.tsx
"use client";

import React, { useState } from "react";
// import Image from "next/image";
import { Search, Eye, Trash2, ChevronRight, Plus } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const customers = [
  {
    id: "1",
    name: "Ethan Booth",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    phone: "+12345678910",
    email: "ethan@gmail.com",
    walletBalance: "$10,350.25",
    orders: "07",
  },
  {
    id: "2",
    name: "Sofia Hall",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    phone: "+12345678910",
    email: "sofia@gmail.com",
    walletBalance: "$12,350.45",
    orders: "02",
  },
  {
    id: "3",
    name: "Dominic Moss",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    phone: "+12345678910",
    email: "dominic@gmail.com",
    walletBalance: "$11,345.25",
    orders: "03",
  },
  {
    id: "4",
    name: "Tilly Thomson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    phone: "+12345678910",
    email: "tilly@gmail.com",
    walletBalance: "$9,540.47",
    orders: "06",
  },
  {
    id: "5",
    name: "Finley Henry",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    phone: "+12345678910",
    email: "finley@gmail.com",
    walletBalance: "$7,250.36",
    orders: "12",
  },
  {
    id: "6",
    name: "Lola Ryan",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    phone: "+12345678910",
    email: "lora@gmail.com",
    walletBalance: "$8,356.34",
    orders: "03",
  },
  {
    id: "7",
    name: "Gabriel McKenzie",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop",
    phone: "+12345678910",
    email: "gabriel@gmail.com",
    walletBalance: "$4,370.55",
    orders: "12",
  },
  {
    id: "8",
    name: "James Davey",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    phone: "+12345678910",
    email: "james@gmail.com",
    walletBalance: "$2,458.15",
    orders: "06",
  },
  {
    id: "9",
    name: "Millie Charlton",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    phone: "+12345678910",
    email: "millie@gmail.com",
    walletBalance: "$1,568.25",
    orders: "24",
  },
];

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter customers based on search (name, email, or phone)
  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm),
  );
  return (
    <div className="p-6 space-y-6 bg-[#F6F9FC] min-h-screen">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800">Customers</h1>
        <Button className="bg-[#0F172A] hover:bg-slate-800 text-white gap-2 px-4 py-2">
          <Plus size={18} />
          Add Customer
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Search Header */}
        <div className="p-4 bg-white">
          <div className="relative max-w-sm">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search customers"
              className="pl-10 border-slate-200 focus-visible:ring-slate-300"
            />
          </div>
        </div>

        {/* Table Content */}
        <Table>
          <TableHeader className="bg-slate-50 border-b border-slate-100">
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-semibold text-slate-600">
                Name
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Phone Number
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Email Address
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Wallet Balance
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Orders
              </TableHead>
              <TableHead className="font-semibold text-slate-600 text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow
                key={customer.id}
                className="group hover:bg-slate-50/50 transition-colors"
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 relative rounded-full overflow-hidden border border-slate-100">
                      <img
                        src={customer.image}
                        alt={customer.name}
                        // fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-semibold text-slate-700">
                      {customer.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {customer.phone}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {customer.email}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {customer.walletBalance}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {customer.orders}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-400 hover:text-slate-600"
                    >
                      <Eye size={18} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-400 hover:text-red-500"
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination Section */}
        <div className="flex items-center justify-center gap-2 p-6 border-t border-slate-50 bg-white">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-8 h-8 border-[#0F172A] text-[#0F172A] font-bold"
          >
            1
          </Button>
          <Button
            variant="ghost"
            className="text-slate-400 hover:bg-transparent"
          >
            2
          </Button>
          <Button
            variant="ghost"
            className="text-slate-400 hover:bg-transparent"
          >
            3
          </Button>
          <Button
            variant="ghost"
            className="text-slate-400 hover:bg-transparent"
          >
            4
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-8 h-8 text-slate-400 border-slate-200"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
