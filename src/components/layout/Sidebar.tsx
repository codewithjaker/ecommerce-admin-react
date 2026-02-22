import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  RefreshCw,
  Store,
  DollarSign,
  RotateCcw,
  Star,
  Settings,
  UserCog,
  Globe,
  HeadphonesIcon,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Receipt,
  CreditCard,
  Settings2,
  History,
  BarChart3,
} from "lucide-react";
import { Button } from "../ui/button"; // Adjust path to your UI components
import { cn } from "@/lib/utils";    // Adjust path to your utils

// Types
type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  children?: NavItem[];
};

// Data (Keeping your existing structure)
const adminLinks: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  {
    name: "Products",
    href: "/products",
    icon: Package,
    children: [
      { name: "Product List", href: "/products", icon: Package },
      { name: "Product Details", href: "/products/details", icon: Package },
      { name: "Category", href: "/products/category", icon: Package },
      { name: "Brand", href: "/products/brand", icon: Package },
      { name: "Review", href: "/products/review", icon: Package },
    ],
  },
  {
    name: "Orders",
    href: "/orders",
    icon: ShoppingCart,
    children: [
      { name: "Order List", href: "/orders", icon: ShoppingCart },
      { name: "Order Details", href: "/orders/details", icon: ShoppingCart },
    ],
  },
  { name: "Customers", href: "/customers", icon: Users },
  {
    name: "Refunds",
    href: "/refunds",
    icon: RefreshCw,
    children: [
      { name: "Refund Requests", href: "/refunds/requests", icon: RefreshCw },
      { name: "Refund Settings", href: "/refunds/settings", icon: RefreshCw },
    ],
  },
  {
    name: "Sellers",
    href: "/sellers",
    icon: Store,
    children: [
      { name: "Seller List", href: "/sellers", icon: Store },
      { name: "Payouts", href: "/sellers/payouts", icon: Store },
      { name: "Payout Request", href: "/sellers/payout-request", icon: Store },
      { name: "Seller Packages", href: "/sellers/packages", icon: Store },
      { name: "Package Payments", href: "/sellers/payments", icon: Store },
    ],
  },
];

const vendorLinks: NavItem[] = [
  {
    name: "Earnings",
    href: "/earnings",
    icon: DollarSign,
    children: [
      { name: "Earnings", icon: BarChart3, href: "/earnings" },
      { name: "Earning History", href: "/earnings/history", icon: History },
      { name: "Payouts", href: "/earnings/payouts", icon: CreditCard },
      { name: "Payout Request", href: "/earnings/payout-requests", icon: Receipt },
      { name: "Payout Settings", href: "/earnings/settings", icon: Settings2 },
    ],
  },
  { name: "Refund Request", href: "/refund-request", icon: RotateCcw },
  { name: "Reviews", href: "/reviews", icon: Star },
  { name: "Shop Settings", href: "/shop-settings", icon: Settings },
  { name: "Account Settings", href: "/account-settings", icon: UserCog },
  { name: "Site Setting", href: "/site-setting", icon: Globe },
];

const bottomLinks: NavItem[] = [
  { name: "Support Tickets", href: "/support", icon: HeadphonesIcon },
  { name: "Log Out", href: "/logout", icon: LogOut },
];

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  
  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    Products: true,
  });

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const renderNavItems = (items: NavItem[], sectionTitle?: string) => (
    <div className="mb-6">
      {!collapsed && sectionTitle && (
        <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          {sectionTitle}
        </h3>
      )}
      <ul className="space-y-1">
        {items.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openMenus[item.name];
          
          // Check if any child is active to highlight the parent
          const isParentActive = hasChildren && item.children?.some(child => pathname === child.href);

          if (item.name === "Log Out") {
            return (
              <li key={item.name}>
                <button
                  onClick={handleLogout}
                  className={cn(
                    "w-full flex items-center px-4 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 transition-colors",
                    collapsed && "justify-center"
                  )}
                >
                  <item.icon size={20} className={cn(collapsed ? "mr-0" : "mr-3")} />
                  {!collapsed && <span>{item.name}</span>}
                </button>
              </li>
            );
          }

          return (
            <li key={item.href}>
              {hasChildren ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-2 text-sm font-medium rounded-md transition-colors",
                      isParentActive ? "bg-indigo-50 text-indigo-600" : "text-gray-700 hover:bg-gray-100",
                      collapsed && "justify-center"
                    )}
                  >
                    <div className="flex items-center">
                      <item.icon size={20} className={cn(collapsed ? "mr-0" : "mr-3")} />
                      {!collapsed && <span>{item.name}</span>}
                    </div>
                    {!collapsed && (isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                  </button>
                  {!collapsed && isOpen && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {item.children?.map((child) => (
                        <li key={child.href}>
                          <NavLink
                            to={child.href}
                            className={({ isActive }) => cn(
                              "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
                              isActive ? "bg-indigo-50 text-indigo-600" : "text-gray-700 hover:bg-gray-100"
                            )}
                          >
                            <child.icon size={18} className="mr-3 flex-shrink-0" />
                            <span>{child.name}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.href}
                  className={({ isActive }) => cn(
                    "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive ? "bg-indigo-50 text-indigo-600" : "text-gray-700 hover:bg-gray-100",
                    collapsed && "justify-center"
                  )}
                >
                  <item.icon size={20} className={cn(collapsed ? "mr-0" : "mr-3")} />
                  {!collapsed && <span>{item.name}</span>}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <aside
      className={cn(
        "bg-white border-r border-gray-200 h-screen transition-all duration-300 flex flex-col sticky top-0",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        {!collapsed && <span className="text-xl font-bold text-indigo-600">bozoor</span>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        {renderNavItems(adminLinks, "Admin")}
        {renderNavItems(vendorLinks, "Vendor")}
        <div className="mt-auto border-t pt-4">
          {renderNavItems(bottomLinks)}
        </div>
      </div>
    </aside>
  );
}