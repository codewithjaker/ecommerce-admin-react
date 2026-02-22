// pages/auth/VerifyOtp.tsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Key, AlertCircle, CheckCircle, RotateCcw } from "lucide-react";

const VerifyOtp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState<"signup" | "password-reset">("signup");
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Get email and purpose from location state
    const state = location.state as { email?: string; purpose?: string };
    if (state?.email) setEmail(state.email);
    if (state?.purpose) setPurpose(state.purpose as any);

    // Start countdown timer
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [location.state]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const pastedArray = pastedData.split("");

    const newOtp = [...otp];
    pastedArray.forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });

    setOtp(newOtp);

    // Focus last filled input
    const lastFilledIndex = pastedArray.length - 1;
    if (lastFilledIndex < 5) {
      inputRefs.current[lastFilledIndex + 1]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    try {
      // API call to resend OTP
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setTimer(60);
      setCanResend(false);
      setError("");
    } catch (err) {
      setError("Failed to resend OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      // API call to verify OTP
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate verification
      if (otpString === "123456") {
        // Test OTP
        setIsVerified(true);

        // Navigate based on purpose
        setTimeout(() => {
          if (purpose === "password-reset") {
            navigate("/reset-password", { state: { email } });
          } else {
            navigate("/signin");
          }
        }, 1500);
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("Verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isVerified) {
    return (
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="mt-4 text-xl font-medium text-gray-900">
          OTP Verified!
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          {purpose === "password-reset"
            ? "You can now reset your password."
            : "Your account has been successfully verified."}
        </p>
        <div className="mt-6">
          <div className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Redirecting...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
          <Key className="h-6 w-6 text-indigo-600" />
        </div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Verify OTP</h2>
        <p className="mt-2 text-sm text-gray-600">
          We've sent a 6-digit verification code to{" "}
          <span className="font-medium">{email}</span>
        </p>
        <p className="mt-1 text-sm text-gray-600">
          Please enter the code below to{" "}
          {purpose === "password-reset"
            ? "reset your password"
            : "verify your account"}
          .
        </p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <div className="flex justify-center space-x-2" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(e) =>
                  handleOtpChange(index, e.target.value.replace(/\D/g, ""))
                }
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-colors"
              />
            ))}
          </div>
          {error && (
            <div className="mt-2 flex items-center justify-center text-sm text-red-600">
              <AlertCircle className="h-4 w-4 mr-1" />
              {error}
            </div>
          )}
        </div>

        <div className="text-center">
          <div className="text-sm text-gray-600">
            {timer > 0 ? (
              <p>Resend OTP in {timer} seconds</p>
            ) : (
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={isLoading}
                className="text-indigo-600 hover:text-indigo-500 font-medium inline-flex items-center"
              >
                <RotateCcw className="h-4 w-4 mr-1" />
                Resend OTP
              </button>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
              isLoading ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Verifying..." : "Verify OTP"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifyOtp;
