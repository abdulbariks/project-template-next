"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit">Login</Button>
      <p className="text-sm">
        No account?{" "}
        <Link href="/register" className="text-primary underline">
          Register
        </Link>
      </p>
    </form>
  );
}
