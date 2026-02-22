import { Camera } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AccountSettingsPage() {
  return (
    <div className="p-6 space-y-6 bg-[#F6F9FC] min-h-screen">
      <h1 className="text-xl font-bold text-slate-800">Edit Profile</h1>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Banner and Profile Image Section */}
        <div className="relative h-64 w-full bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
            alt="Profile"
            // Ensure avatar also fills its container
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <Button
              size="icon"
              className="rounded-full bg-[#0F172A] hover:bg-slate-800 h-10 w-10"
            >
              <Camera size={18} className="text-white" />
            </Button>
          </div>

          {/* Avatar with Camera Overlay */}
          <div className="absolute -bottom-12 left-8">
            <div className="relative h-24 w-24 rounded-full border-4 border-white overflow-hidden bg-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                alt="Profile"
                // fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer hover:bg-black/40 transition-colors">
                <Camera size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="pt-20 px-8 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* First Name */}
            <div className="space-y-2">
              <Label
                htmlFor="firstName"
                className="text-sm font-semibold text-slate-700"
              >
                First Name
              </Label>
              <Input
                id="firstName"
                defaultValue="Ralf"
                className="h-11 border-slate-200 focus-visible:ring-slate-300"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label
                htmlFor="lastName"
                className="text-sm font-semibold text-slate-700"
              >
                Last Name
              </Label>
              <Input
                id="lastName"
                defaultValue="Edward"
                className="h-11 border-slate-200 focus-visible:ring-slate-300"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-semibold text-slate-700"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="ralf@email.com"
                className="h-11 border-slate-200 focus-visible:ring-slate-300"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-semibold text-slate-700"
              >
                Phone
              </Label>
              <Input
                id="phone"
                defaultValue="+19279482734987"
                className="h-11 border-slate-200 focus-visible:ring-slate-300"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label
                htmlFor="country"
                className="text-sm font-semibold text-slate-700"
              >
                Country
              </Label>
              <Select defaultValue="us">
                <SelectTrigger className="h-11 border-slate-200 w-full">
                  <SelectValue placeholder="Select Country "  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇺🇸</span> United States
                    </div>
                  </SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* City */}
            <div className="space-y-2">
              <Label
                htmlFor="city"
                className="text-sm font-semibold text-slate-700"
              >
                City
              </Label>
              <Input
                id="city"
                defaultValue="New York"
                className="h-11 border-slate-200 focus-visible:ring-slate-300"
              />
            </div>
          </div>

          <div className="mt-8">
            <Button className="bg-[#0F172A] hover:bg-slate-800 text-white px-8 h-11 rounded-md transition-all active:scale-95">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
