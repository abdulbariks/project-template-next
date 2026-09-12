import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  if (isAuthenticated) {
    links.push({ href: "/dashboard", label: "Dashboard" });
  }

  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-lg">
          Logo
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden border-t px-4 py-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
