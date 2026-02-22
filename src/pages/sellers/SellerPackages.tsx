import { 
  Plus, 
  Crown, 
  Star, 
  Medal, 
  CheckCircle2, 
  Circle 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const packages = [
  {
    id: "1",
    name: "Premium Package",
    price: "$25",
    icon: <Crown className="w-8 h-8 text-[#4E97FD]" />,
    iconBg: "bg-[#E3F2FF]",
    features: [
      "Product Upload Limit: 250",
      "Commission: 5%",
      "Package Duration: 1,095 days",
      "365 days",
    ],
  },
  {
    id: "2",
    name: "Gold Package",
    price: "$115",
    icon: <Star className="w-8 h-8 text-[#A07CFE]" />,
    iconBg: "bg-[#F3EFFF]",
    features: [
      "Product Upload Limit: 250",
      "Commission: 15%",
      "Package Duration: 7,730 days",
      "365 days",
    ],
  },
  {
    id: "3",
    name: "Gold Package",
    price: "$115",
    icon: <Medal className="w-8 h-8 text-[#74828F]" />,
    iconBg: "bg-[#F0F2F4]",
    features: [
      "Product Upload Limit: 250",
      "Commission: 15%",
      "Package Duration: 1,095 days",
      "365 days",
    ],
  },
  {
    id: "4",
    name: "Sirckage",
    price: "$25",
    icon: <Circle className="w-8 h-8 text-[#94A3B8]" />,
    iconBg: "bg-[#F1F5F9]",
    features: [
      "Product Upload Limit: 250",
      "Commission: 5%",
      "Commission: 2%",
      "Package Duration: 1,065 days",
    ],
  },
  {
    id: "5",
    name: "Silver Package",
    price: "$15",
    icon: <Star className="w-8 h-8 text-[#A07CFE]" />,
    iconBg: "bg-[#F3EFFF]",
    features: [
      "Product Upload Limit:",
      "105 days",
      "Product Upload Limit: 150",
      "Commission: 15%",
      "Package Duration: 730 days",
    ],
  },
  {
    id: "6",
    name: "Silver Package",
    price: "$15",
    icon: <Medal className="w-8 h-8 text-[#74828F]" />,
    iconBg: "bg-[#F0F2F4]",
    features: [
      "Product Upload Limit: 250",
      "Commission: 5%",
      "Commission: 25%",
      "Package Duration: 1,365 days",
    ],
  },
];

export default function SellerPackagesPage() {
  return (
    <div className="p-6 space-y-8 bg-[#334155] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">All Seller Packages</h1>
        <Button className="bg-[#1E293B] hover:bg-slate-800 text-white gap-2 px-6 py-6 rounded-lg shadow-xl">
          <Plus size={20} />
          Add New Package
        </Button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="border-none shadow-2xl rounded-2xl overflow-hidden bg-white">
            <CardHeader className="flex flex-col items-center pt-10 pb-4">
              <div className={`p-5 rounded-full ${pkg.iconBg} mb-6`}>
                {pkg.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800">{pkg.name}</h3>
              <div className="flex items-baseline mt-2">
                <span className="text-4xl font-extrabold text-slate-900">{pkg.price}</span>
                <span className="text-slate-400 font-medium ml-1">(month)</span>
              </div>
            </CardHeader>

            <CardContent className="px-10 pb-8">
              <div className="w-full h-[1px] bg-slate-100 mb-6" />
              <ul className="space-y-3">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="px-10 pb-10 flex gap-4">
              <Button variant="outline" className="flex-1 border-slate-200 text-slate-600 font-bold h-11 rounded-xl hover:bg-slate-50">
                Edit
              </Button>
              <Button variant="outline" className="flex-1 border-rose-100 text-rose-500 font-bold h-11 rounded-xl hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200">
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}