export function Footer() {
  return (
    <footer className="bg-anthracite px-6 py-10 text-cream/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-display text-lg font-semibold text-cream">Auruby</p>
        <p className="font-sans text-xs">
          © {new Date().getFullYear()} Auruby. YKI keskitaso prep, made with
          care.
        </p>
      </div>
    </footer>
  );
}
