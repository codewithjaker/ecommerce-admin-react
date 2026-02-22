// layouts/AuthLayout.tsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BookOpen } from "lucide-react";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-10 w-10 text-indigo-600" />
            <span className="text-3xl font-bold text-gray-900">LibraSys</span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
          Library Management System
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Streamline your library operations
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
          <Outlet />
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-indigo-100 text-gray-500">
                Library Management System v1.0
              </span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} LibraSys. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
