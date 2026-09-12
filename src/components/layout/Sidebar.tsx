export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background p-4">
      <nav className="space-y-2">
        <a href="/dashboard" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">
          Dashboard
        </a>
        <a href="/dashboard/profile" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">
          Profile
        </a>
        <a href="/dashboard/settings" className="block rounded-md px-3 py-2 text-sm hover:bg-accent">
          Settings
        </a>
      </nav>
    </aside>
  );
}
