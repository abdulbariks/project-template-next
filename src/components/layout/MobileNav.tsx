import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-background transition-transform md:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="p-4">
        <button onClick={onClose} className="mb-4 text-sm">Close</button>
        <nav className="space-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
