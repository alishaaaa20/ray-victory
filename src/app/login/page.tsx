"use client";
import React from "react";
import { H3 } from "@/components/Typography";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LockKeyhole, Phone, Eye, EyeOff, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [seePassword, setSeePassword] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const router = useRouter();

  const handlePhoneChange = (e: any) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setPhone(onlyDigits);
  };
  return (
    <section className="container py-32">
      <div className="mx-auto max-w-md rounded-lg border border-primary bg-white p-8 shadow-xl shadow-primary/50">
        <div className="text-center">
          <H3 className="text-2xl font-semibold">Login</H3>
        </div>
        <form>
          <div className="mt-8 space-y-2">
            <Label className="mb-2 text-lg">Email</Label>
            {/* Email NO */}
            <div className="flex items-center rounded-md border border-gray-300">
              <Mail className="mx-2 text-primary" />
              <Input
                placeholder="Enter your email"
                className="w-full border-none p-2 placeholder:font-light placeholder:text-gray-500 focus:outline-none"
              />
            </div>
            {/* PASSWORD */}
            <div className="mt-4 space-y-2">
              <Label className="mb-2 text-lg">Password</Label>
              <div className="flex items-center rounded-md border border-gray-300">
                <LockKeyhole className="mx-2 text-primary" />
                <input
                  type={seePassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full border-none p-2 placeholder:font-light placeholder:text-gray-500 focus:outline-none"
                />

                <span className="mx-2 text-gray-500">
                  {seePassword ? (
                    <EyeOff
                      className="cursor-pointer text-primary"
                      onClick={() => setSeePassword(false)}
                    />
                  ) : (
                    <Eye
                      className="cursor-pointer text-primary"
                      onClick={() => setSeePassword(true)}
                    />
                  )}
                </span>
              </div>
            </div>
            <div className="mt-4 text-left">
              <div className="mt-4 text-left">
                <a
                  href="/forgot-password"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <div className="mt-6 text-center">
                <Button
                  type="submit"
                  className="w-full rounded-lg py-2 text-white font-medium"
                >
                  Login
                </Button>
              </div>
              <div className="mt-4 text-center">
                <span className="font-medium">Don t have an account?</span>
                <a
                  href="/register"
                  className="font-medium text-blue-600 underline"
                >
                  {" "}
                  Register
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
