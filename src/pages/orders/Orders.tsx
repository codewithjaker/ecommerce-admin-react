// app/orders/page.tsx

import {
  Eye,
  Pencil,
  Trash2,
  Search,
  ChevronRight,
} from "lucide-react";

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
import { Badge } from "@/components/ui/badge";

const orders = [
  {
    id: "6ed34Edf65d",
    name: "Samsung Galaxy-M1",
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80",
    qty: 12,
    purchaseDate: "19 April, 2025",
    billingAddress: "19 Moulton Road, GULBERWICK.",
    amount: "$250",
    status: "Delivered",
  },
  {
    id: "6ed34Edf65d",
    name: "Tomato",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    qty: 2,
    purchaseDate: "19 April, 2025",
    billingAddress: "19 Moulton Road, GULBERWICK.",
    amount: "$10/per kg",
    status: "Delivered",
  },
  {
    id: "6ed34Edf65d",
    name: "Boston Round Cream Pack",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
    qty: 3,
    purchaseDate: "19 April, 2025",
    billingAddress: "19 Moulton Road, GULBERWICK.",
    amount: "$24",
    status: "Delivered",
  },
  {
    id: "6ed34Edf65d",
    name: "Woman Party Dress",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80",
    qty: 6,
    purchaseDate: "19 April, 2025",
    billingAddress: "19 Moulton Road, GULBERWICK.",
    amount: "$35",
    status: "Delivered",
  },
  {
    id: "6ed34Edf65d",
    name: "Tops for girl",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
    qty: 12,
    purchaseDate: "19 April, 2025",
    billingAddress: "19 Moulton Road, GULBERWICK.",
    amount: "$16",
    status: "Delivered",
  },
  {
    id: "6ed34Edf65d",
    name: "Casual Shirt for Man",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
    qty: 3,
    purchaseDate: "19 April, 2025",
    billingAddress: "19 Moulton Road, GULBERWICK.",
    amount: "$26",
    status: "Delivered",
  },
  {
    id: "6ed34Edf65d",
    name: "Blue Premium T-shirt",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    qty: 12,
    purchaseDate: "19 April, 2025",
    billingAddress: "19 Moulton Road, GULBERWICK.",
    amount: "$25",
    status: "Delivered",
  },
  {
    id: "6ed34Edf65d",
    name: "Blue Jeans Pant",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80",
    qty: 6,
    purchaseDate: "19 April, 2025",
    billingAddress: "19 Moulton Road, GULBERWICK.",
    amount: "$36",
    status: "Delivered",
  },
  {
    id: "6ed34Edf65d",
    name: "Man Trowzer Pant",
    image:
      "https://images.unsplash.com/photo-1624373687551-57c9e631ee1d?w=400&q=80",
    qty: 24,
    purchaseDate: "19 April, 2025",
    billingAddress: "19 Moulton Road, GULBERWICK.",
    amount: "$12",
    status: "Delivered",
  },
];

export default function OrderListPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50/50 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800">Order List</h1>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        {/* Table Header / Search Area */}
        <div className="p-4 border-b border-slate-100">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search"
              className="pl-10 bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-slate-200"
            />
          </div>
        </div>

        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-semibold text-slate-600">
                Name
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Qty
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Purchase Date
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Billing Address
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Amount
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Status
              </TableHead>
              <TableHead className="font-semibold text-slate-600 text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow
                key={index}
                className="group hover:bg-slate-50/50 transition-colors"
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 relative rounded-md overflow-hidden bg-slate-100 border border-slate-100">
                      <img
                        src={order.image}
                        alt={order.name}
                        // fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-slate-700 text-sm">
                        {order.name}
                      </div>
                      <div className="text-xs text-slate-400 font-mono">
                        {order.id}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-slate-600 font-bold text-sm">
                  {order.qty.toString().padStart(2, "0")}
                </TableCell>
                <TableCell className="text-slate-500 text-sm">
                  {order.purchaseDate}
                </TableCell>
                <TableCell className="text-slate-500 text-sm max-w-[200px] truncate">
                  {order.billingAddress}
                </TableCell>
                <TableCell className="text-slate-700 font-semibold text-sm">
                  {order.amount}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-100 text-emerald-600 hover:bg-emerald-100 border-none px-2 py-0.5 rounded text-[10px] font-bold"
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-400 hover:text-slate-600"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-400 hover:text-slate-600"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-400 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination following image style */}
        <div className="flex items-center justify-center gap-2 p-6 border-t border-slate-50">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-8 h-8 text-slate-400 border-slate-200"
          >
            1
          </Button>
          <span className="text-sm text-slate-400 px-1">2</span>
          <span className="text-sm text-slate-400 px-1">3</span>
          <span className="text-sm text-slate-400 px-1">4</span>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-8 h-8 text-slate-400 border-slate-200"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
