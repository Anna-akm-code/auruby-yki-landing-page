export function SiteFooter() {
  return (
    <footer className="bg-english-dark px-6 py-11 text-white/60 sm:px-12">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 font-body text-[14px]">
        <div className="flex items-baseline gap-[9px]">
          <span className="font-heading text-[19px] font-semibold text-english-lilac">
            auruby.io
          </span>
          <span className="block h-1.5 w-1.5 rounded-full bg-english-chartreuse" />
        </div>
        <div className="flex gap-7">
          <a href="#" className="transition hover:text-english-chartreuse">
            Instagram
          </a>
          <a href="#" className="transition hover:text-english-chartreuse">
            Telegram
          </a>
          <a href="#" className="transition hover:text-english-chartreuse">
            Email
          </a>
        </div>
        <span>© 2026 Anna · Английский как инструмент</span>
      </div>
    </footer>
  );
}
