// pages/auth/ForgotPassword.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

interface ForgotPasswordFormData {
  email: string;
}

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resetData, setResetData] = useState<{ email: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError(null);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Validate email
    if (!formData.email.trim()) {
      setError("Email is required");
      setIsLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
    } catch (err: any) {
      console.error("Forgot password error:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Network error. Please check your connection and try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted && resetData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="shadow-lg">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Check your email</CardTitle>
              <CardDescription>
                We've sent a password reset OTP to your email address
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  We've sent a password reset OTP to:
                </p>
                <p className="text-sm font-medium text-gray-900 bg-gray-50 p-3 rounded-md">
                  {resetData.email}
                </p>
                <p className="text-sm text-gray-600">
                  Please check your inbox and follow the instructions to reset
                  your password. The OTP will expire in 10 minutes.
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={() =>
                    navigate("/verify-otp", {
                      state: {
                        email: resetData.email,
                        purpose: "password-reset",
                      },
                    })
                  }
                  className="w-full"
                >
                  Continue to Verify OTP
                </Button>

                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    Didn't receive the email?
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setError(null);
                    }}
                    className="w-full"
                  >
                    Try Again
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <Link
                    to="/signin"
                    className="text-sm font-medium text-blue-600 hover:text-blue-500 hover:underline"
                  >
                    ← Back to Sign In
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md">
        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">
              Forgot Password
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email address and we'll send you an OTP to reset your
              password
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Error Alert */}
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full pl-10"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  You'll receive an OTP to reset your password
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading || !formData.email}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending OTP...
                  </>
                ) : (
                  "Send Reset OTP"
                )}
              </Button>
            </form>

            {/* Additional Links */}
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Remember your password?{" "}
                <Link
                  to="/signin"
                  className="text-blue-600 hover:text-blue-500 font-medium hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
