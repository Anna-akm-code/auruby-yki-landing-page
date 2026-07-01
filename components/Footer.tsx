export function Footer() {
  return (
    <footer className="bg-anthracite px-6 py-10 text-cream/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-6">
          <p className="font-display text-lg font-semibold text-cream">Auruby</p>
          <a
            href="/faq"
            className="font-sans text-sm text-cream/60 transition hover:text-cream"
          >
            FAQ
          </a>
        </div>
        <p className="font-sans text-xs">
          © {new Date().getFullYear()} Auruby. YKI keskitaso prep, made with
          care.
        </p>
      </div>
    </footer>
  );
}
