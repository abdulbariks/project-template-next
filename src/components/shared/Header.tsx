import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="font-bold text-lg">
          Logo
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/products" className="text-sm hover:underline">
            Products
          </Link>
          <Link href="/about" className="text-sm hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
