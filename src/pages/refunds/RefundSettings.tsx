import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Globe, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
// import Link from "next/link";

// Initial refund reasons list
const initialReasons = [
  "Ordered the wrong product",
  "The merchant shipped the wrong product",
  "The product is damaged or defective",
  "The product arrived too late",
  "The product does not match the description",
];

export default function RefundSettingsPage() {
  const [reasons, setReasons] = useState(initialReasons);
  const [newReason, setNewReason] = useState("");

  const handleAddReason = () => {
    if (newReason.trim()) {
      setReasons([...reasons, newReason.trim()]);
      setNewReason("");
    }
  };

  const handleDeleteReason = (index: number) => {
    setReasons(reasons.filter((_, i) => i !== index));
  };

  const handleUpdateReasons = () => {
    // Here you would typically save to backend
    console.log("Updated reasons:", reasons);
    // You can add toast notification here
  };

  return (
    <div className="space-y-6">
      {/* Header with actions */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Refund Settings</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <Globe className="mr-2 h-4 w-4" />
              Browse Website
            </Link>
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      {/* Two-column layout for Refund Time and Order Status */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Refund Time Card */}
        <Card>
          <CardHeader>
            <CardTitle>Refund Time</CardTitle>
            <CardDescription>Set the refund request generation time limit.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="refund-time">Refund Request Generation Time</Label>
              <div className="flex gap-2">
                <Input id="refund-time" type="number" defaultValue={120} className="flex-1" />
                <span className="inline-flex items-center px-3 bg-muted rounded-md text-sm">Days</span>
              </div>
            </div>
            <Button>Update</Button>
          </CardContent>
        </Card>

        {/* Order Status Card */}
        <Card>
          <CardHeader>
            <CardTitle>Order Status</CardTitle>
            <CardDescription>Enable or disable refund requests for orders.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="order-status">Enabling Refund Request</Label>
              <Input id="order-status" defaultValue="Confirm" />
            </div>
            <Button>Confirm</Button>
          </CardContent>
        </Card>
      </div>

      {/* Refund Reasons Card */}
      <Card>
        <CardHeader>
          <CardTitle>Refund Reasons</CardTitle>
          <CardDescription>Manage the list of refund reasons customers can select.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-3">
                <Input value={reason} readOnly className="flex-1 bg-muted/50" />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteReason(index)}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Add new reason input */}
          <div className="flex items-center gap-3">
            <Input
              placeholder="Add new reason..."
              value={newReason}
              onChange={(e) => setNewReason(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddReason()}
              className="flex-1"
            />
            <Button variant="outline" onClick={handleAddReason}>
              <Plus className="mr-2 h-4 w-4" /> Add
            </Button>
          </div>

          <Separator />

          <div className="flex gap-3">
            <Button onClick={handleUpdateReasons}>Update</Button>
            <Button variant="outline" onClick={() => setNewReason("")}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}