// app/sellers/page.tsx

import { useState } from "react";

import { Search, Eye, Pencil, Trash2, ChevronRight, Plus } from "lucide-react";

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
import { Switch } from "@/components/ui/switch";

const sellers = [
  {
    id: "6ed34Edf65d",
    name: "Ethan Booth",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    shopName: "The Beauty",
    package: "Premium",
    balance: "$10,350.25",
    published: true,
  },
  {
    id: "6ed34Edf65d",
    name: "Sofia Hall",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    shopName: "Mobile Gadgets",
    package: "Silver",
    balance: "$11,345.25",
    published: true,
  },
  {
    id: "6ed34Edf65d",
    name: "Dominic Moss",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    shopName: "Tech Tube",
    package: "Premium",
    balance: "$11,345.25",
    published: false,
  },
  {
    id: "6ed34Edf65d",
    name: "Tilly Thomson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    shopName: "Beyond Threads",
    package: "Gold",
    balance: "$9,540.47",
    published: true,
  },
  {
    id: "6ed34Edf65d",
    name: "Finley Henry",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    shopName: "Beauty Shop",
    package: "Premium",
    balance: "$7,250.36",
    published: false,
  },
  {
    id: "6ed34Edf65d",
    name: "Lola Ryan",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    shopName: "Febric Fashion",
    package: "Premium",
    balance: "$8,356.34",
    published: true,
  },
  {
    id: "6ed34Edf65d",
    name: "Gabriel McKenzie",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop",
    shopName: "The Fashion",
    package: "Gold",
    balance: "$4,370.55",
    published: false,
  },
  {
    id: "6ed34Edf65d",
    name: "James Davey",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    shopName: "Icon Boy",
    package: "Premium",
    balance: "$2,458.15",
    published: true,
  },
  {
    id: "6ed34Edf65d",
    name: "Millie Charlton",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    shopName: "Dream Boy",
    package: "Silver",
    balance: "$1,568.25",
    published: false,
  },
];

export default function SellersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSellers = sellers.filter(
    (seller) =>
      seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seller.shopName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seller.package.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="p-6 space-y-6 bg-[#F6F9FC] min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800">Sellers</h1>
        <Button className="bg-[#0F172A] hover:bg-slate-800 text-white gap-2 px-4 py-2">
          <Plus size={18} />
          Add New Seller
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Search Input */}
        {/* <div className="p-4 bg-white">
          <div className="relative max-w-sm">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <Input
              placeholder="Search seller"
              className="pl-10 border-slate-200 focus-visible:ring-slate-300"
            />
          </div>
        </div> */}
        {/* Search */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search seller..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          {/* The image shows a search button but we use live filtering, so button optional */}
          <Button variant="secondary" onClick={() => setSearchTerm("")}>
            Reset
          </Button>
        </div>

        {/* Sellers Table */}
        <Table>
          <TableHeader className="bg-slate-50 border-b border-slate-100">
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-semibold text-slate-600">
                Seller Name
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Shop Name
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Current Package
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Current Balance
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Shop Published
              </TableHead>
              <TableHead className="font-semibold text-slate-600 text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sellers.map((seller, index) => (
              <TableRow
                key={index}
                className="group hover:bg-slate-50/50 transition-colors"
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 relative rounded-full overflow-hidden border border-slate-100">
                      <img
                        src={seller.image}
                        alt={seller.name}
                        // fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-700">
                        {seller.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        #{seller.id}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {seller.shopName}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {seller.package}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {seller.balance}
                </TableCell>
                <TableCell>
                  <Switch
                    checked={seller.published}
                    className="data-[state=checked]:bg-slate-900"
                  />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-slate-400 hover:text-slate-600"
                    >
                      <Pencil size={16} />
                    </Button>
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
