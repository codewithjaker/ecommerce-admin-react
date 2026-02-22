import { 
  Eye, 
  ChevronRight} from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const earningsData = [
  { id: "1", orderNo: "5256SD6465D32", shopName: "The Beauty Shop", adminCommission: "$5.26", sellerEarning: "$360", date: "20-04-2022" },
  { id: "2", orderNo: "5256SD6465D32", shopName: "The Gainner", adminCommission: "$2.50", sellerEarning: "$200", date: "16-04-2022" },
  { id: "3", orderNo: "5256SD6465D32", shopName: "Tech Tube", adminCommission: "$9.20", sellerEarning: "$450", date: "14-04-2022" },
  { id: "4", orderNo: "5256SD6465D32", shopName: "Smart HD", adminCommission: "$2.40", sellerEarning: "$120", date: "12-04-2022" },
  { id: "5", orderNo: "5256SD6465D32", shopName: "Dream Boy", adminCommission: "$7.60", sellerEarning: "$100", date: "08-04-2022" },
  { id: "6", orderNo: "5256SD6465D32", shopName: "Beyond Threads", adminCommission: "$9.20", sellerEarning: "$700", date: "01-04-2022" },
  { id: "7", orderNo: "5256SD6465D32", shopName: "Febrick Fashion", adminCommission: "$4.50", sellerEarning: "$300", date: "26-03-2022" },
  { id: "8", orderNo: "5256SD6465D32", shopName: "Icon Boy", adminCommission: "$3.60", sellerEarning: "$200", date: "16-03-2022" },
  { id: "9", orderNo: "5256SD6465D32", shopName: "Mobile Gadgets", adminCommission: "$2.10", sellerEarning: "$110", date: "12-03-2022" },
];

export default function EarningHistoryPage() {
  return (
    <div className="p-6 space-y-6 bg-[#F6F9FC] min-h-screen">
      {/* Page Header matching the UI pattern */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold text-slate-800">Earning History</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 border-b border-slate-100">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[80px] font-semibold text-slate-600 pl-6">#</TableHead>
              <TableHead className="font-semibold text-slate-600">Order No</TableHead>
              <TableHead className="font-semibold text-slate-600">Shop Name</TableHead>
              <TableHead className="font-semibold text-slate-600">Admin Commission</TableHead>
              <TableHead className="font-semibold text-slate-600">Seller Earning</TableHead>
              <TableHead className="font-semibold text-slate-600">Date</TableHead>
              <TableHead className="font-semibold text-slate-600 text-right pr-6">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {earningsData.map((item) => (
              <TableRow key={item.id} className="group hover:bg-slate-50/50 transition-colors border-b border-slate-50">
                <TableCell className="text-slate-400 font-medium pl-6">
                  {item.id}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {item.orderNo}
                </TableCell>
                <TableCell className="font-bold text-slate-800">
                  {item.shopName}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {item.adminCommission}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {item.sellerEarning}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {item.date}
                </TableCell>
                <TableCell className="text-right pr-6">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600 transition-colors">
                    <Eye size={18} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Standard Bazaar Pagination */}
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