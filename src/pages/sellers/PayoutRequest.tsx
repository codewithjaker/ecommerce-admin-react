import { 
  Eye, 
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

const payoutRequests = [
  { id: "1", seller: "Ethan Booth", shop: "The Beauty Shop", totalAmount: "$1,200", reqAmount: "$360", date: "20-04-2022", status: "Accepted" },
  { id: "2", seller: "Sofia Hall", shop: "The Gainer", totalAmount: "$250", reqAmount: "$200", date: "16-04-2022", status: "Accepted" },
  { id: "3", seller: "Dominic Moss", shop: "Tech Tube", totalAmount: "$9,320", reqAmount: "$450", date: "14-04-2022", status: "Processing" },
  { id: "4", seller: "Tilly Thomson", shop: "Smart HD", totalAmount: "$2,200", reqAmount: "$120", date: "12-04-2022", status: "Pending" },
  { id: "5", seller: "Finley Henry", shop: "Dream Boy", totalAmount: "$700", reqAmount: "$100", date: "08-04-2022", status: "Accepted" },
  { id: "6", seller: "Lola Ryan", shop: "Beyond Threads", totalAmount: "$970", reqAmount: "$700", date: "01-04-2022", status: "Accepted" },
  { id: "7", seller: "Gabriel McKenzie", shop: "Febrick Fashion", totalAmount: "$450", reqAmount: "$300", date: "26-03-2022", status: "Processing" },
  { id: "8", seller: "James Davey", shop: "Icon Boy", totalAmount: "$360", reqAmount: "$200", date: "16-03-2022", status: "Pending" },
  { id: "9", seller: "Millie Charlton", shop: "Mobile Gadgets", totalAmount: "$210", reqAmount: "$110", date: "12-03-2022", status: "Accepted" },
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

export default function PayoutRequestsPage() {
  return (
    <div className="p-6 space-y-6 bg-[#F6F9FC] min-h-screen">
      <h1 className="text-xl font-bold text-slate-800">Payout Requests</h1>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 border-b border-slate-100">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[60px] font-semibold text-slate-600">#</TableHead>
              <TableHead className="font-semibold text-slate-600">Seller Info</TableHead>
              <TableHead className="font-semibold text-slate-600">Shop Name</TableHead>
              <TableHead className="font-semibold text-slate-600">Total Amount</TableHead>
              <TableHead className="font-semibold text-slate-600">Req. Amount</TableHead>
              <TableHead className="font-semibold text-slate-600">Date</TableHead>
              <TableHead className="font-semibold text-slate-600">Status</TableHead>
              <TableHead className="font-semibold text-slate-600 text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payoutRequests.map((req) => (
              <TableRow key={req.id} className="group hover:bg-slate-50/50 transition-colors">
                <TableCell className="text-slate-400 font-medium">{req.id}</TableCell>
                <TableCell className="font-bold text-slate-800">{req.seller}</TableCell>
                <TableCell className="text-slate-500 font-medium">{req.shop}</TableCell>
                <TableCell className="text-slate-500 font-medium">{req.totalAmount}</TableCell>
                <TableCell className="text-slate-500 font-medium">{req.reqAmount}</TableCell>
                <TableCell className="text-slate-500 font-medium">{req.date}</TableCell>
                <TableCell>
                  <Badge className={`px-2 py-0.5 rounded text-[11px] font-bold shadow-none ${getStatusStyles(req.status)}`}>
                    {req.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600">
                    <Eye size={18} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination Section */}
        <div className="flex items-center justify-center gap-2 p-6 border-t border-slate-50 bg-white">
          <Button variant="outline" size="icon" className="rounded-full w-8 h-8 border-slate-900 text-slate-900 font-bold">
            1
          </Button>
          <Button variant="ghost" className="text-slate-400 hover:bg-transparent h-8 w-8 p-0">2</Button>
          <Button variant="ghost" className="text-slate-400 hover:bg-transparent h-8 w-8 p-0">3</Button>
          <Button variant="ghost" className="text-slate-400 hover:bg-transparent h-8 w-8 p-0">4</Button>
          <Button variant="outline" size="icon" className="rounded-full w-8 h-8 text-slate-400 border-slate-200">
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}