import Image from "next/image";

const stats = [
  { value: "8+", label: "лет преподавания" },
  { value: "CELTA", label: "Cambridge" },
  { value: "IT", label: "разработка и продукт" },
  { value: "3", label: "языка учу сама" },
];

export function AnnaSection() {
  return (
    <section className="border-t border-english-aubergine/10 bg-white px-6 py-24 sm:px-12">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-14 md:grid-cols-[0.72fr_1.28fr] md:gap-18">
        <div className="relative aspect-[4/5] max-h-[400px] overflow-hidden rounded-[20px] border border-english-aubergine/10">
          <Image
            src="/anna.jpg"
            alt="Анна"
            fill
            sizes="(min-width: 768px) 30vw, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <div className="mb-5 font-mono text-[11.5px] uppercase tracking-[0.16em] text-english-muted">
            Кто ведёт
          </div>
          <h2 className="font-heading text-[42px] leading-[1.05] tracking-[-0.035em] text-english-aubergine sm:text-[52px]">
            Анна
          </h2>
          <p className="mt-2 font-heading text-[20px] text-english-muted">
            Преподаватель английского и разработчик
          </p>
          <p className="mt-6 max-w-[640px] font-body text-[17.5px] leading-[1.6] text-english-aubergine">
            Преподаю английский с 2015 года, сертификат CELTA (Cambridge).
            Параллельно работаю в IT: разработка, продукт, AI-проекты. Знаю,
            как звучат рабочие созвоны, интервью и код-ревью — изнутри, не в
            теории. Сама учу языки: много занималась финским, сейчас
            возвращаю немецкий и начинаю румынский. Хорошо помню, каково это
            — понимать, но не мочь сказать.
          </p>
          <div className="mt-9 flex flex-wrap gap-11 border-t border-english-aubergine/10 pt-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-[40px] font-semibold leading-none tracking-[-0.03em] text-english-aubergine">
                  {stat.value}
                </div>
                <div className="mt-1.5 font-body text-[14px] text-english-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
