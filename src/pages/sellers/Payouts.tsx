import { Eye, ChevronRight } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const payouts = [
  {
    id: "1",
    shopName: "The Beauty Shop",
    amount: "$1,200",
    date: "20-04-2022",
    method: "Cash",
  },
  {
    id: "2",
    shopName: "The Gainer",
    amount: "$250",
    date: "16-04-2022",
    method: "Visa Card",
  },
  {
    id: "3",
    shopName: "Tech Tube",
    amount: "$9,320",
    date: "14-04-2022",
    method: "Stripe",
  },
  {
    id: "4",
    shopName: "Smart HD",
    amount: "$2,200",
    date: "12-04-2022",
    method: "PayPal",
  },
  {
    id: "5",
    shopName: "Dream Boy",
    amount: "$700",
    date: "08-04-2022",
    method: "Payoneer",
  },
  {
    id: "6",
    shopName: "Beyond Threads",
    amount: "$970",
    date: "01-04-2022",
    method: "Stripe",
  },
  {
    id: "7",
    shopName: "Febrick Fashion",
    amount: "$450",
    date: "26-03-2022",
    method: "PayPal",
  },
  {
    id: "8",
    shopName: "Icon Boy",
    amount: "$360",
    date: "16-03-2022",
    method: "Cash",
  },
  {
    id: "9",
    shopName: "Mobile Gadgets",
    amount: "$210",
    date: "12-03-2022",
    method: "PayPal",
  },
];

export default function PayoutsPage() {
  return (
    <div className="p-6 space-y-6 bg-[#F6F9FC] min-h-screen">
      {/* Page Title */}
      <h1 className="text-xl font-bold text-slate-800">Payouts</h1>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 border-b border-slate-100">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[80px] font-semibold text-slate-600">
                #
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Seller Info
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Amount
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Date
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Payment Method
              </TableHead>
              <TableHead className="font-semibold text-slate-600 text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payouts.map((payout) => (
              <TableRow
                key={payout.id}
                className="group hover:bg-slate-50/50 transition-colors"
              >
                <TableCell className="text-slate-400 font-medium">
                  {payout.id}
                </TableCell>
                <TableCell className="font-bold text-slate-800">
                  {payout.shopName}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {payout.amount}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {payout.date}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {payout.method}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-slate-400 hover:text-slate-600"
                  >
                    <Eye size={18} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination following the visual design */}
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
            className="text-slate-400 hover:bg-transparent h-8 w-8 p-0"
          >
            2
          </Button>
          <Button
            variant="ghost"
            className="text-slate-400 hover:bg-transparent h-8 w-8 p-0"
          >
            3
          </Button>
          <Button
            variant="ghost"
            className="text-slate-400 hover:bg-transparent h-8 w-8 p-0"
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
