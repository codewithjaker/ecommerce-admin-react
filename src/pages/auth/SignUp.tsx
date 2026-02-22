import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, UserPlus } from "lucide-react";

// Validation schema
const signUpSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  role: z.enum(["librarian", "admin", "assistant"]),
  mobile: z.string().min(10, {
    message: "Please enter a valid mobile number.",
  }),
  permissions: z
    .array(
      z.object({
        module: z.string(),
        can_read: z.boolean(),
        can_write: z.boolean(),
        can_delete: z.boolean(),
      }),
    )
    .min(1, {
      message: "Please select at least one module permission.",
    }),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

// Available modules for permissions
const availableModules = [
  {
    id: "books",
    label: "Books Management",
    description: "Manage books, categories, and inventory",
  },
  {
    id: "members",
    label: "Members Management",
    description: "Manage library members and accounts",
  },
  {
    id: "transactions",
    label: "Transactions",
    description: "Handle book checkouts, returns, and renewals",
  },
  {
    id: "fines",
    label: "Fines & Payments",
    description: "Manage fines, payments, and waivers",
  },
  {
    id: "reports",
    label: "Reports & Analytics",
    description: "Access library reports and analytics",
  },
  {
    id: "system",
    label: "System Settings",
    description: "Manage library system settings",
  },
];

const defaultPermissions = availableModules.map((module) => ({
  module: module.id,
  can_read: false,
  can_write: false,
  can_delete: false,
}));

export default function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "librarian",
      mobile: "",
      permissions: defaultPermissions,
    },
  });

  const selectedRole = form.watch("role");

  // Set default permissions based on role
  const setDefaultPermissions = (role: string) => {
    const newPermissions = defaultPermissions.map((permission) => {
      const basePermission = { ...permission };

      switch (role) {
        case "admin":
          basePermission.can_read = true;
          basePermission.can_write = true;
          basePermission.can_delete = true;
          break;
        case "librarian":
          if (
            ["books", "members", "transactions", "fines"].includes(
              permission.module,
            )
          ) {
            basePermission.can_read = true;
            basePermission.can_write = true;
            basePermission.can_delete = false;
          }
          break;
        case "assistant":
          if (
            ["books", "members", "transactions"].includes(permission.module)
          ) {
            basePermission.can_read = true;
            basePermission.can_write = true;
            basePermission.can_delete = false;
          }
          break;
        default:
          break;
      }

      return basePermission;
    });

    form.setValue("permissions", newPermissions);
  };

  const handleRoleChange = (role: string) => {
    form.setValue("role", role as "librarian" | "admin" | "assistant");
    setDefaultPermissions(role);
  };

  const onSubmit = async (data: SignUpFormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      // Redirect to login after successful registration
      setTimeout(() => {
        navigate("/signin", { replace: true });
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePermissionChange = (
    moduleId: string,
    permissionType: "can_read" | "can_write" | "can_delete",
    checked: boolean,
  ) => {
    const currentPermissions = form.getValues("permissions");
    const updatedPermissions = currentPermissions.map((permission) =>
      permission.module === moduleId
        ? { ...permission, [permissionType]: checked }
        : permission,
    );
    form.setValue("permissions", updatedPermissions);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <UserPlus className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-2xl">
              Account Created Successfully!
            </CardTitle>
            <CardDescription>
              Your library management system account has been created.
              Redirecting to login...
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8"> */}
      <div className="w-full max-w-4xl  gap-8 ">
        {/* Right Side - Signup Form */}
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Create Admin Account</CardTitle>
            <CardDescription>
              Enter your details to create a new library management system
              account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john.smith@library.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Password Field */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Mobile Field */}
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+8801329859741" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Role Field */}
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        onValueChange={handleRoleChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="librarian">Librarian</SelectItem>
                          <SelectItem value="admin">Administrator</SelectItem>
                          <SelectItem value="assistant">Assistant</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        {selectedRole === "admin" &&
                          "Full system access with all permissions"}
                        {selectedRole === "librarian" &&
                          "Can manage books, members, and transactions"}
                        {selectedRole === "assistant" &&
                          "Limited access for daily operations"}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Permissions Section */}
                {/* <div className="space-y-4">
                  <FormLabel>Module Permissions</FormLabel>
                  <FormDescription>
                    Configure access permissions for different library modules
                  </FormDescription>

                  <div className="space-y-4 border rounded-lg p-4">
                    {availableModules.map((module) => {
                      const permission = form
                        .watch("permissions")
                        .find((p) => p.module === module.id);

                      return (
                        <div
                          key={module.id}
                          className="space-y-3 p-3 border rounded-md"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium text-sm">
                                {module.label}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {module.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id={`${module.id}-read`}
                                checked={permission?.can_read || false}
                                onCheckedChange={(checked) =>
                                  handlePermissionChange(
                                    module.id,
                                    "can_read",
                                    checked as boolean
                                  )
                                }
                              />
                              <label
                                htmlFor={`${module.id}-read`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Read
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id={`${module.id}-write`}
                                checked={permission?.can_write || false}
                                onCheckedChange={(checked) =>
                                  handlePermissionChange(
                                    module.id,
                                    "can_write",
                                    checked as boolean
                                  )
                                }
                              />
                              <label
                                htmlFor={`${module.id}-write`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Write
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id={`${module.id}-delete`}
                                checked={permission?.can_delete || false}
                                onCheckedChange={(checked) =>
                                  handlePermissionChange(
                                    module.id,
                                    "can_delete",
                                    checked as boolean
                                  )
                                }
                              />
                              <label
                                htmlFor={`${module.id}-delete`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Delete
                              </label>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {form.formState.errors.permissions && (
                    <p className="text-sm font-medium text-destructive">
                      {form.formState.errors.permissions.message}
                    </p>
                  )}
                </div> */}

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>

                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-blue-600 hover:underline">
                    Sign in
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
