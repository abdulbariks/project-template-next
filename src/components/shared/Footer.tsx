export default function Footer() {
  return (
    <footer className="border-t py-4 text-center text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()}
    </footer>
  );
}
