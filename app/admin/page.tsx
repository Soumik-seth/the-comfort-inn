"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const text = await response.text();

      console.log("API Status:", response.status);
      console.log("API Response:", text);

      let data: {
        success?: boolean;
        message?: string;
      } = {};

      if (text) {
        try {
          data = JSON.parse(text);
        } catch {
          setError("Invalid response from server.");
          return;
        }
      }

      if (!response.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      // Login successful
      router.push("/admin/dashboard");

    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black px-6">

      <div className="flex min-h-screen items-center justify-center">

        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="mb-10 text-center">

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl font-bold text-white">
                C
              </div>

              <div className="text-left">

                <h1 className="text-xl font-bold tracking-wider text-white">
                  THE COMFORT INN
                </h1>

                <p className="text-xs tracking-[0.25em] text-red-500">
                  HOTEL & RESORT
                </p>

              </div>
            </Link>

          </div>

          {/* Heading */}
          <div className="mb-8 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
              Administrator
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Sign In
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Sign in to access the admin dashboard
            </p>

            <div className="mx-auto mt-5 h-1 w-14 bg-red-600" />

          </div>

          {/* Login Box */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />

              </div>

              {/* Password */}
              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-black px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                />

              </div>

              {/* Error */}
              {error && (
                <div className="rounded-lg border border-red-900 bg-red-950/40 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Sign In */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-red-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-[#d4af37] hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>

            </form>

          </div>

          {/* Back to Website */}
          <div className="mt-8 text-center">

            <Link
              href="/"
              className="text-sm font-medium text-gray-400 transition hover:text-red-500"
            >
              ← Go Back to Website
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}