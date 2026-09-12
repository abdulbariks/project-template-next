"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function RegisterForm() {
  const [error, setError] = useState<string | null>(null);

  return (
    <form className="space-y-4" onSubmit={() => {}}>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit">Register</Button>
    </form>
  );
}
