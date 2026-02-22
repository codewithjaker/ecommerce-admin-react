import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Mock data based on Order details.png
const orderDetails = {
  orderInfo: {
    id: "9001997718074513",
    placedOn: "01 Jan, 2021",
    status: "Processing",
  },
  items: [
    {
      id: "1",
      name: "Samsung Galaxy-M1",
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      price: 250,
      quantity: 1,
      properties: "Product color: Black",
    },
    {
      id: "2",
      name: "Fresh Tomatto",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      price: 10,
      quantity: 5,
      properties: "Product properties: Fresh Food",
    },
    {
      id: "3",
      name: "Boston Round Cream Pack",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
      price: 24,
      quantity: 3,
      properties: "Product properties: Alchohol free perfume",
    },
  ],
  shippingAddress: {
    name: "Kelly Williams",
    address: "777 Brockton Avenue, Abington MA 2351",
  },
  customerNote: "Please deliver ASAP.",
  totalSummary: {
    subtotal: 2610.0,
    shipping: 0,
    tax: 40.0,
    discount: 0,
    total: 2650.0,
    paymentMethod: "Paid with Credit/Debit Card",
  },
};

export default function OrderDetailsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Order Details</h1>
      </div>

      {/* Order ID and Placed on */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Order ID</p>
              <p className="font-medium">{orderDetails.orderInfo.id}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Placed on</p>
              <p className="font-medium">{orderDetails.orderInfo.placedOn}</p>
            </div>
            <Badge variant="secondary" className="ml-auto">
              {orderDetails.orderInfo.status}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Add Product Section */}
      <Card>
        <CardHeader>
          <CardTitle>Add Product</CardTitle>
          <CardDescription>
            Search and add products to this order
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <Input placeholder="Type product name..." className="max-w-md" />
            <Button variant="outline">Search</Button>
          </div>
        </CardContent>
      </Card>

      {/* Items List */}
      <Card>
        <CardHeader>
          <CardTitle>Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orderDetails.items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b pb-4 last:border-0 last:pb-0"
              >
                {/* Product Image */}
                <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 border bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    // fill
                    sizes="64px"
                    className="object-cover"
                    onError={(e) => {
                      // Fallback for missing images
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/64x64?text=No+Image";
                    }}
                  />
                </div>
                {/* Product Info */}
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.properties}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Qty: {item.quantity} × ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Shipping and Note */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shipping Address */}
        <Card>
          <CardHeader>
            <CardTitle>Shipping Address</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p className="font-medium">{orderDetails.shippingAddress.name}</p>
              <p className="text-sm text-muted-foreground">
                {orderDetails.shippingAddress.address}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Customer Note */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Note</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {orderDetails.customerNote}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Total Summary and Payment Method */}
      <Card>
        <CardHeader>
          <CardTitle>Total Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${orderDetails.totalSummary.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span>
                {orderDetails.totalSummary.shipping
                  ? `$${orderDetails.totalSummary.shipping.toFixed(2)}`
                  : "-"}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax</span>
              <span>${orderDetails.totalSummary.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Discount</span>
              <span>
                {orderDetails.totalSummary.discount
                  ? `-$${orderDetails.totalSummary.discount.toFixed(2)}`
                  : "-"}
              </span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${orderDetails.totalSummary.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm pt-2">
              <span className="text-muted-foreground">Payment Method</span>
              <span className="font-medium">
                {orderDetails.totalSummary.paymentMethod}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Changes Button */}
      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
