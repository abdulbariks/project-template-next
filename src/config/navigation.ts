export const NAVIGATION = {
  main: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
  dashboard: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile", href: "/dashboard/profile" },
    { label: "Settings", href: "/dashboard/settings" },
  ],
  admin: [
    { label: "Users", href: "/admin/users" },
    { label: "Settings", href: "/admin/settings" },
  ],
} as const;
