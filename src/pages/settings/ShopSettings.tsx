import { Camera, Trash2, Plus } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ShopSettingsPage() {
  return (
    <div className="p-6 space-y-6 bg-[#F6F9FC] min-h-screen">
      <h1 className="text-xl font-bold text-slate-800">Shop Settings</h1>

      <Card className="border-none shadow-sm rounded-xl overflow-hidden">
        <CardContent className="p-8 space-y-10 bg-white">
          
          {/* Basic Settings Section */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-800">Basic Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-slate-700">Shop Name *</Label>
                <Input defaultValue="The Icon Style" className="h-12 border-slate-200" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-slate-700">Shop Phone</Label>
                <Input defaultValue="+123 4567 8910" className="h-12 border-slate-200" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="text-sm font-semibold text-slate-700">Category *</Label>
                <Select defaultValue="fashion">
                  <SelectTrigger className="h-12 border-slate-200 w-full" >
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="grocery">Grocery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="text-sm font-semibold text-slate-700">Description (optional)</Label>
                <Textarea 
                  placeholder="There are many variations of passages..." 
                  className="min-h-[120px] border-slate-200 resize-none"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="text-sm font-semibold text-slate-700">Shop Address *</Label>
                <Input defaultValue="4990 Hide A Way Road Santa Clara, CA 95050." className="h-12 border-slate-200" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="text-sm font-semibold text-slate-700">Minimum Order *</Label>
                <Input defaultValue="10" className="h-12 border-slate-200" />
              </div>
            </div>
            <Button className="bg-[#0F172A] hover:bg-slate-800 text-white px-8 h-10 rounded-md">
              Save Changes
            </Button>
          </div>

          <div className="w-full h-[1px] bg-slate-100" />

          {/* Shop Page Settings Section */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-800">Shop Page Settings</h2>
            
            {/* Main Banner Upload */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-slate-700">Main Banner (1920 x 360) *</Label>
              <div className="relative w-full h-[180px] rounded-xl overflow-hidden bg-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1920&auto=format&fit=crop" 
                  alt="Shop Banner" 
                  // fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="bg-white/90 p-3 rounded-full shadow-lg">
                    <Camera size={24} className="text-slate-700" />
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 italic">We had to limit height to maintain consistency. Some devices both sides of the banner might be cropped.</p>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-slate-700">Product Features</Label>
              <Select defaultValue="samsung">
                <SelectTrigger className="h-12 border-slate-200">
                  <SelectValue placeholder="Select Product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="samsung">Samsung new realized phone M1</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* All Products Banner */}
            <div className="space-y-3 pt-4">
              <Label className="text-sm font-semibold text-slate-700">All products page banner * (Recommended size 1025x120)</Label>
              <div className="relative w-1/3 h-[100px] rounded-xl overflow-hidden bg-slate-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1534452286302-2f5d8284fa79?q=80&w=1025&auto=format&fit=crop" 
                  alt="Products Banner" 
                  // fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="bg-white/90 p-2 rounded-full shadow-lg">
                    <Camera size={18} className="text-slate-700" />
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 italic">We had to limit height to maintain consistency.</p>
            </div>

            {/* Links Section */}
            <div className="space-y-3 pt-4">
              <Label className="text-sm font-semibold text-slate-700">Links*</Label>
              <div className="flex gap-2">
                <Input defaultValue="https://www.ui-lib.com" className="h-12 border-slate-200" />
                <Button variant="ghost" size="icon" className="h-12 w-12 text-slate-400 hover:text-rose-500">
                  <Trash2 size={20} />
                </Button>
              </div>
              <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 h-10 px-6">
                <Plus size={16} className="mr-2" /> Add New
              </Button>
            </div>

            <div className="pt-6">
              <Button className="bg-[#0F172A] hover:bg-slate-800 text-white px-8 h-10 rounded-md shadow-lg shadow-slate-200">
                Save Changes
              </Button>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}