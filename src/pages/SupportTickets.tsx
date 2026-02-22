import React from 'react'

import { 
  Search, 
  Pencil, 
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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const tickets = [
  { id: "1", info: "Product Broken. I need refund", type: "Urgent", date: "13 April, 2022", title: "Website Problem" },
  { id: "2", info: "When will my product arrive?", type: "Normal", date: "13 April, 2022", title: "Website Problem" },
  { id: "3", info: "Payment method is not working", type: "Urgent", date: "13 April, 2022", title: "Website Problem" },
  { id: "4", info: "Do you accept prepaid card?", type: "Regular", date: "13 April, 2022", title: "Website Problem" },
  { id: "5", info: "Where's My Stuff?", type: "Regular", date: "13 April, 2022", title: "Website Problem" },
  { id: "6", info: "Account Settings & Payment...", type: "Urgent", date: "13 April, 2022", title: "Website Problem" },
  { id: "7", info: "Shipping policies details", type: "Urgent", date: "13 April, 2022", title: "Website Problem" },
  { id: "8", info: "How do I return my item?", type: "Normal", date: "13 April, 2022", title: "Website Problem" },
  { id: "9", info: "How do I cancel my order?", type: "Regular", date: "13 April, 2022", title: "Website Problem" },
];

const getBadgeStyles = (type: string) => {
  switch (type) {
    case "Urgent":
      return "bg-rose-50 text-rose-500 hover:bg-rose-100 border-none shadow-none px-3";
    case "Normal":
      return "bg-sky-50 text-sky-500 hover:bg-sky-100 border-none shadow-none px-3";
    case "Regular":
      return "bg-emerald-50 text-emerald-500 hover:bg-emerald-100 border-none shadow-none px-3";
    default:
      return "bg-slate-50 text-slate-500";
  }
};

export default function SupportTicketsPage() {
  return (
    <div className="p-6 space-y-6 bg-[#F6F9FC] min-h-screen">
      {/* Page Title & Search */}
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-slate-800">Support Ticket</h1>
        
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input 
            placeholder="Search Ticket" 
            className="pl-10 h-11 bg-white border-slate-100 shadow-sm rounded-lg placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 border-b border-slate-100">
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-semibold text-slate-600 pl-6">Information</TableHead>
              <TableHead className="font-semibold text-slate-600">Type</TableHead>
              <TableHead className="font-semibold text-slate-600">Ticket Date</TableHead>
              <TableHead className="font-semibold text-slate-600">Problem Title</TableHead>
              <TableHead className="font-semibold text-slate-600 text-right pr-6">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id} className="group hover:bg-slate-50/50 transition-colors">
                <TableCell className="font-bold text-slate-800 pl-6">
                  {ticket.info}
                </TableCell>
                <TableCell>
                  <Badge className={getBadgeStyles(ticket.type)}>
                    {ticket.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {ticket.date}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {ticket.title}
                </TableCell>
                <TableCell className="text-right pr-6">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600">
                      <Pencil size={18} />
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

        {/* Pagination Section */}
        <div className="flex items-center justify-center gap-2 p-6 border-t border-slate-50 bg-white">
          <Button variant="outline" size="icon" className="rounded-full w-8 h-8 border-[#0F172A] text-[#0F172A] font-bold">
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