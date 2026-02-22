import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import AuthLayout from "./components/layout/AuthLayout";
import DashboardLayout from "./components/layout/DashboardLayout";

// Auth Pages
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Dashboard / General Pages
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Reviews from "./pages/Reviews";
import SupportTickets from "./pages/SupportTickets";

// Product Pages
import Products from "./pages/products/Products";
import ProductDetails from "./pages/products/ProductDetails";
import Category from "./pages/products/Category";
import Brand from "./pages/products/Brand";
import ProductReview from "./pages/products/Review";

// Order Pages
import Orders from "./pages/orders/Orders";
import OrderDetails from "./pages/orders/OrderDetails";

// Refund Pages
import RefundRequests from "./pages/vendor/RefundRequests.tsx";
import RefundSettings from "./pages/refunds/RefundSettings";
import VendorRefundRequest from "./pages/vendor/RefundRequests.tsx";

// Seller & Earning Pages
import SellerList from "./pages/sellers/SellerList";
import Payouts from "./pages/sellers/Payouts";
import PayoutRequest from "./pages/sellers/PayoutRequest";
import SellerPackages from "./pages/sellers/SellerPackages";
import PackagePayments from "./pages/sellers/PackagePayments";
import Earnings from "./pages/earnings/Earnings";
import EarningHistory from "./pages/earnings/EarningHistory";

// Settings
import ShopSettings from "./pages/settings/ShopSettings";
import AccountSettings from "./pages/settings/AccountSettings";
import SiteSetting from "./pages/settings/SiteSetting";
import ResetPassword from "./pages/auth/ResetPassword.tsx";
import VerifyOtp from "./pages/auth/VerifyOtp.tsx";

// // Route Guards
// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const isAuthenticated = localStorage.getItem("token");
//   return isAuthenticated ? <>{children}</> : <Navigate to="/signin" replace />;
// };

// const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("token");
//   return isAuthenticated ? <Navigate to="/" replace /> : <>{children}</>;
// };

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* --- Public Auth Routes --- */}
        <Route
          element={
            // <PublicRoute>
            <AuthLayout />
            // </PublicRoute>
          }
        >
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
        </Route>

        {/* --- Protected Dashboard Routes --- */}
        <Route
          element={
            // <ProtectedRoute>
            <DashboardLayout />
            // </ProtectedRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />

          {/* Products Section */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/details" element={<ProductDetails />} />
          <Route path="/products/category" element={<Category />} />
          <Route path="/products/brand" element={<Brand />} />
          <Route path="/products/review" element={<ProductReview />} />

          {/* Orders Section */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/details" element={<OrderDetails />} />

          {/* Customers */}
          <Route path="/customers" element={<Customers />} />

          {/* Refunds Section */}
          <Route path="/refunds/requests" element={<RefundRequests />} />
          <Route path="/refunds/settings" element={<RefundSettings />} />
          <Route path="/refund-request" element={<VendorRefundRequest />} />

          {/* Sellers Section */}
          <Route path="/sellers" element={<SellerList />} />
          <Route path="/sellers/payouts" element={<Payouts />} />
          <Route path="/sellers/payout-request" element={<PayoutRequest />} />
          <Route path="/sellers/packages" element={<SellerPackages />} />
          <Route path="/sellers/payments" element={<PackagePayments />} />

          {/* Earnings (Vendor Specific) */}
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/earnings/history" element={<EarningHistory />} />
          <Route path="/earnings/payouts" element={<Payouts />} />
          <Route path="/earnings/payout-requests" element={<PayoutRequest />} />
          <Route path="/earnings/settings" element={<AccountSettings />} />

          {/* Settings & Support */}
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/shop-settings" element={<ShopSettings />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/site-setting" element={<SiteSetting />} />
          <Route path="/support" element={<SupportTickets />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
