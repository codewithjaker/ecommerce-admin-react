import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Top Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Visit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,350.25</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today's total sales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$10,360.66</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Sales</CardTitle>
            <Badge variant="outline" className="text-xs">
              +25.25%
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$10,240</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Share</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm">
              <span>Samsung</span>
              <span className="font-medium">34%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>Symphony</span>
              <span className="font-medium">28%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>iPhone</span>
              <span className="font-medium">38%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Purchases Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Purchases</CardTitle>
          <CardDescription>Latest orders from your store.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "#6d3wed05",
                  product: "Samsung Glaxy-M1",
                  payment: "Success",
                  amount: "$199.25",
                },
                {
                  id: "#6d3wed05",
                  product: "Havic Headphone",
                  payment: "Success",
                  amount: "$152.25",
                },
                {
                  id: "#6d3wed05",
                  product: "Nike Shoes",
                  payment: "Pending",
                  amount: "$125.25",
                },
                {
                  id: "#6d3wed05",
                  product: "Premium Shirt For Men",
                  payment: "Success",
                  amount: "$115.25",
                },
                {
                  id: "#6d3wed05",
                  product: "Polo T-shirt",
                  payment: "Pending",
                  amount: "$97.25",
                },
                {
                  id: "#6d3wed05",
                  product: "Wireless Headphone",
                  payment: "Pending",
                  amount: "$185.25",
                },
                {
                  id: "#6d3wed05",
                  product: "Jeans Pant",
                  payment: "Success",
                  amount: "$255.25",
                },
              ].map((order, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.payment === "Success" ? "default" : "secondary"
                      }
                    >
                      {order.payment}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{order.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Order & Sold Items Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Order</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">32,350</span>
                <span className="font-medium">9,350</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gross Sale</span>
                <span className="font-medium">$12,460.25</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">$11,350</span>
                <span className="font-medium text-green-600">65% Target</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sold Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">2,360</span>
                <span className="font-medium">$1,350</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">~ 25.25%</span>
                <Badge variant="outline">+25.25%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Shipping Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">$6,240</span>
                <span className="font-medium">$4,350</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">~ 13.15%</span>
                <Badge variant="outline">-13.15%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics and Stock Out */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Analytics</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Yearly <MoreHorizontal className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Daily</DropdownMenuItem>
                <DropdownMenuItem>Weekly</DropdownMenuItem>
                <DropdownMenuItem>Monthly</DropdownMenuItem>
                <DropdownMenuItem>Yearly</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around items-center h-32">
              <div className="text-center">
                <div className="text-2xl font-bold">$45.2K</div>
                <div className="text-sm text-muted-foreground">Sales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$12.8K</div>
                <div className="text-sm text-muted-foreground">Expense</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Stock out product</CardTitle>
            <Button variant="ghost" size="sm">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  "Samsung Glaxy-M1",
                  "Havic Headphone",
                  "Nike Shoes",
                  "Premium Shirt For Men",
                  "Polo T-shirt",
                  "Wireless Headphone",
                  "Premium Shirt For Men",
                ].map((product, i) => (
                  <TableRow key={i}>
                    <TableCell>{product}</TableCell>
                    <TableCell>Out</TableCell>
                    <TableCell className="text-right">$0.00</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-2 text-right">
              <Button variant="link" size="sm">
                Amount ▼
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
