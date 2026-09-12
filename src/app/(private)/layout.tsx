export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r">Sidebar</aside>
      <div className="flex-1">
        <nav className="border-b">Nav</nav>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
