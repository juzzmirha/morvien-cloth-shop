"use client";

import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

export default function AuthPage() {
  const [tab, setTab] = useState<"signup" | "signin">("signup");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className="flex justify-around bg-indigo-900 py-4">
          <button
            onClick={() => setTab("signup")}
            className={`text-white font-medium cursor-pointer ${
              tab === "signup" ? "underline" : ""
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setTab("signin")}
            className={`text-white font-medium cursor-pointer ${
              tab === "signin" ? "underline" : ""
            }`}
          >
            Sign In
          </button>
        </div>

        <div className="px-6 py-4">
          <h2 className="text-center text-lg font-semibold text-gray-800">
            {tab === "signup" ? "Create An Account" : "Welcome Back"}
          </h2>

          <form className="mt-6 flex flex-col gap-4">
            {tab === "signup" && (
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-sm outline-none focus:border-indigo-500"
                />
              </div>
            )}
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-sm outline-none focus:border-indigo-500"
              />
            </div>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-sm outline-none focus:border-indigo-500"
              />
            </div>
            <button className="w-full rounded-full bg-indigo-900 py-2 text-white font-medium hover:bg-indigo-800 transition cursor-pointer">
              {tab === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">
              Or sign {tab === "signup" ? "up" : "in"} with
            </span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 rounded-full border border-gray-300 py-2 hover:bg-gray-50 transition cursor-pointer">
              <img src="/google.svg" alt="Google" className="h-5 w-5" />
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 rounded-full bg-indigo-900 text-white py-2 hover:bg-indigo-800 transition cursor-pointer">
              <img src="/facebook.svg" alt="Facebook" className="h-5 w-5" />
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
