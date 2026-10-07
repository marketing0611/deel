import type { ReactNode } from "react";
import { Cite } from "@/components/cite";
import { DeelAnatomy } from "@/components/deel-anatomy";
import { DeelStudio } from "@/components/deel-studio";
import { EthnicTabs } from "@/components/ethnic-tabs";
import { KitIcon, LogoMark, RoleIcon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import {
  CUSTOMS,
  DEEL_TYPES,
  FACTS,
  GLOSSARY,
  KIT,
  NAV_LINKS,
  OCCASIONS,
  PROVERBS,
  ROLES,
  SEASONS,
  SOURCES,
  TEMP_MAX,
  TEMP_MIN,
  TIMELINE,
  WITNESSES,
  formatTemp,
  type SeasonTone,
} from "@/lib/deel";

function Khee({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`khee ${className}`} />;
}

const HEADER_TONES = {
  plain: { eyebrow: "text-accent", intro: "text-muted" },
  night: { eyebrow: "text-shar", intro: "text-white/75" },
  gold: { eyebrow: "text-on-shar/70", intro: "text-on-shar/80" },
};

function SectionHeader({
  index,
  eyebrow,
  title,
  tone = "plain",
  children,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  tone?: keyof typeof HEADER_TONES;
  children?: ReactNode;
}) {
  const colors = HEADER_TONES[tone];
  return (
    <div className="max-w-2xl">
      <p className={`eyebrow flex items-center gap-3 ${colors.eyebrow}`}>
        {index && (
          <>
            <span className="tabular-nums">{index}</span>
            <span aria-hidden className="h-px w-10 bg-current opacity-50" />
          </>
        )}
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
        {title}
      </h2>
      {children && <p className={`mt-5 text-lg/relaxed ${colors.intro}`}>{children}</p>}
    </div>
  );
}

const ROLE_COLORS = ["bg-khukh", "bg-yagaan", "bg-nogoon", "bg-ulaan", "bg-shar text-on-shar"];

const FACT_COLORS = ["bg-khukh", "bg-ulaan", "bg-nogoon", "bg-[#3ba3e0]", "bg-yagaan", "bg-shar"];

const SEASON_TONES: Record<SeasonTone, string> = {
  shar: "bg-shar text-on-shar",
  nogoon: "bg-nogoon text-white",
  ulaan: "bg-ulaan text-white",
  shunu: "bg-shunu text-white ring-1 ring-white/10",
};

const tempPct = (t: number) => ((t - TEMP_MIN) / (TEMP_MAX - TEMP_MIN)) * 100;

function Hero() {
  return (
    <section className="relative overflow-hidden bg-khukh text-white">
      <div aria-hidden className="hero-sun" />
      <div aria-hidden className="hero-moon" />
      <div className="shell relative grid gap-12 pt-14 pb-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:pt-20 md:pb-24">
        <div className="min-w-0">
          <p className="eyebrow text-shar">Монгол үндэсний хувцас</p>
          <div className="mt-4 flex items-end gap-4 sm:gap-6">
            <h1 className="font-display text-[clamp(4.5rem,17vw,10.5rem)] font-black leading-[0.88] tracking-[-0.04em]">
              Дээл
            </h1>
            <p
              lang="mn-Mong"
              aria-hidden
              className="mongol-script mb-1 text-[clamp(1.375rem,3.2vw,2rem)] leading-none text-shar"
            >
              ᠮᠣᠩᠭᠣᠯ ᠳᠡᠭᠡᠯ
            </p>
          </div>
          <p className="mt-7 max-w-[34rem] text-lg/relaxed text-white/85 sm:text-xl/relaxed">
            Тал нутгийн салхи, жавар, морин дээрх амьдралд зориулан хоёр мянга
            гаруй жил хөгжсөн монгол хүний уламжлалт хувцас.
          </p>
          <p className="mt-4 max-w-[34rem] text-base/relaxed text-white/70">
            Археологийн олдвор, XIII зууны аялагчдын тэмдэглэл, ардын уламжлалд
            тулгуурлан дээлийн түүх, бүтэц, төрөл, ястны хэв маяг, ёс заншлыг
            танилцуулна.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#barimt"
              className="rounded-full bg-shar px-6 py-3 font-semibold text-on-shar transition-transform hover:-translate-y-0.5"
            >
              Баримттай танилцах
            </a>
            <a
              href="#butets"
              className="rounded-full px-6 py-3 font-semibold text-white ring-1 ring-white/45 transition-colors hover:bg-white/10"
            >
              Бүтэц үзэх
            </a>
          </div>
          <p className="mt-12 max-w-[34rem] border-t border-white/20 pt-5 text-sm/relaxed text-white/65">
            <span className="font-semibold text-white/85">Босоо бичиг:</span> «Монгол
            дээл» монгол бичгээр <span className="italic">(Mongγol degel)</span>.
          </p>
        </div>
        <DeelStudio />
      </div>
    </section>
  );
}

function Facts() {
  return (
    <section id="barimt" className="shell py-20 md:py-28">
      <SectionHeader eyebrow="Тоон баримт" title="Баримтаар дээл">
        Археологийн олдвор, түүхэн сурвалж, хүн амын тооллогоос дээлийн тухай
        гол баримтуудыг нэгтгэв. Дугаарласан тэмдэг эх сурвалж руу холбогдоно.
      </SectionHeader>
      <ul className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {FACTS.map((fact, i) => (
          <li key={fact.label} className="flex flex-col gap-4 bg-surface p-6 sm:p-8">
            <span aria-hidden className={`h-1.5 w-10 rounded-full ${FACT_COLORS[i % FACT_COLORS.length]}`} />
            <div>
              <p className="font-display text-[clamp(2.5rem,5vw,3.25rem)] font-bold leading-none tracking-[-0.03em] tabular-nums">
                {fact.value}
              </p>
              <p className="eyebrow mt-3 text-accent">{fact.label}</p>
            </div>
            <p className="text-[0.95rem]/relaxed text-muted">
              {fact.text}
              {fact.source && <Cite id={fact.source} />}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Roles() {
  return (
    <section id="uureg" className="shell">
      <div className="border-t border-line py-20 md:py-28">
        <SectionHeader index="01" eyebrow="Нүүдэлчний ухаан" title="Нэг дээл, таван үүрэг">
          Нүүдэлчин амьдралд илүү юм авч явах боломж бага. Тиймээс дээл нэгэн
          зэрэг хэд хэдэн хэрэгслийн үүргийг гүйцэтгэдэг байжээ.
        </SectionHeader>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ROLES.map((role, i) => (
            <li
              key={role.id}
              className={`flex gap-5 rounded-[1.75rem] border border-line bg-surface p-6 lg:col-span-1 lg:flex-col ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white ${ROLE_COLORS[i]}`}
              >
                <RoleIcon id={role.id} className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold">{role.name}</h3>
                <p className="mt-2 text-[0.95rem]/relaxed text-muted">{role.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function History() {
  return (
    <section id="tuukh" className="bg-shunu text-white">
      <Khee className="text-shar" />
      <div className="shell py-20 md:py-28">
        <SectionHeader index="02" eyebrow="Түүх" title="Хүннүгээс өнөөг хүртэл" tone="night">
          Дээлийн хэлбэр мянга мянган жилийн турш нүүдэлчдийн амьдралын хэв
          маягтай хамт хувьсан хөгжиж ирсэн.
        </SectionHeader>

        <ol className="mt-14 border-t border-white/15">
          {TIMELINE.map((item) => (
            <li
              key={item.era}
              className="grid gap-x-10 gap-y-4 border-b border-white/15 py-8 md:grid-cols-[11rem_minmax(0,1fr)] lg:grid-cols-[12rem_minmax(0,1.15fr)_minmax(0,1fr)]"
            >
              <p className="font-display text-sm font-semibold text-shar tabular-nums md:pt-2">
                {item.era}
              </p>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-semibold sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-[0.95rem]/relaxed text-white/70">{item.text}</p>
              </div>
              {item.fact && (
                <div className="min-w-0 border-l-2 border-shar/60 pl-4 md:col-start-2 lg:col-start-auto lg:mt-1">
                  <p className="eyebrow text-shar">Баримт</p>
                  <p className="mt-2 text-[0.95rem]/relaxed text-white/85">
                    {item.fact}
                    {item.source && <Cite id={item.source} />}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">Түүхэн гэрчүүд</h3>
          <p className="mt-3 max-w-2xl text-base/relaxed text-white/70">
            XIII зууны Европын элч, аялагчид монголчуудын хувцсыг нүдээр харж
            тэмдэглэн үлдээсэн. Ишлэлийг чөлөөт орчуулгаар буулгав.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {WITNESSES.map((witness) => (
              <li key={witness.who}>
                <figure className="flex h-full flex-col rounded-[1.75rem] bg-white/[0.06] p-6 ring-1 ring-white/10 sm:p-7">
                  <span aria-hidden className="font-display text-5xl leading-none text-shar">
                    «
                  </span>
                  <blockquote className="mt-1 mb-6 text-base/relaxed text-white/90">
                    {witness.quote}
                  </blockquote>
                  <figcaption className="mt-auto border-t border-white/10 pt-5">
                    <p className="font-semibold">
                      {witness.who}
                      <Cite id={witness.source} />
                    </p>
                    <p className="mt-1 text-sm text-white/60">
                      {witness.role} · <span className="tabular-nums">{witness.year}</span>
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Anatomy() {
  return (
    <section id="butets" className="shell py-20 md:py-28">
      <SectionHeader index="03" eyebrow="Бүтэц" title="Дээлийн хэсэг бүр учиртай">
        Зах, энгэр, ханцуй, бүс бүр тал нутгийн амьдралаас үүдэлтэй. Хэсэг
        бүрийг сонгож танилцаарай.
      </SectionHeader>
      <DeelAnatomy />
    </section>
  );
}

function Types() {
  return (
    <section id="turul" className="shell">
      <div className="border-t border-line py-20 md:py-28">
        <SectionHeader index="04" eyebrow="Төрөл" title="Улирал бүрт өөр дээл">
          Монголд агаарын хэм зундаа +30°C хүрч, өвөлдөө −40°C хүртэл буудаг.
          Тиймээс малчин айл улирал бүрт тохирсон дээлтэй байдаг.
        </SectionHeader>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SEASONS.map((season) => (
            <li
              key={season.id}
              className={`flex flex-col gap-4 rounded-[1.75rem] p-6 ${SEASON_TONES[season.tone]}`}
            >
              <p className="eyebrow opacity-80">{season.season}</p>
              <h3 className="font-display text-2xl font-semibold">{season.name}</h3>
              <p className="text-[0.95rem]/relaxed opacity-90">{season.text}</p>
              <ul className="flex flex-wrap gap-2">
                {season.materials.map((material) => (
                  <li
                    key={material}
                    className="rounded-full border border-current/30 px-3 py-1 text-xs font-medium"
                  >
                    {material}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-3">
                <p className="text-xs opacity-75">Тохирох хэм, ойролцоогоор</p>
                <p className="mt-1 font-display text-xl font-semibold tabular-nums">
                  {formatTemp(season.min)}…{formatTemp(season.max)}°C
                </p>
                <div
                  className="relative mt-3 h-2 rounded-full bg-current/20"
                  role="img"
                  aria-label={`${formatTemp(season.min)}-аас ${formatTemp(season.max)} хэм`}
                >
                  <div
                    className="absolute inset-y-0 rounded-full bg-current"
                    style={{
                      left: `${tempPct(season.min)}%`,
                      width: `${tempPct(season.max) - tempPct(season.min)}%`,
                    }}
                  />
                  <div
                    className="absolute -top-1 h-4 w-px bg-current/60"
                    style={{ left: `${tempPct(0)}%` }}
                  />
                </div>
                <div className="relative mt-2 h-4 text-[0.6875rem] tabular-nums opacity-75">
                  <span className="absolute left-0">{formatTemp(TEMP_MIN)}°</span>
                  <span className="absolute -translate-x-1/2" style={{ left: `${tempPct(0)}%` }}>
                    0°
                  </span>
                  <span className="absolute right-0">{formatTemp(TEMP_MAX)}°</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
            <h3 className="font-display text-2xl font-semibold">Бүх төрлийн харьцуулалт</h3>
            <p className="text-sm text-muted">
              {DEEL_TYPES.length} төрөл: дээл болон гадуур нь өмсөх давхар хувцас
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:hidden">
            {DEEL_TYPES.map((type) => (
              <li key={type.name} className="rounded-[1.25rem] border border-line bg-surface p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-display font-semibold">{type.name}</p>
                  <p className="text-sm font-semibold text-accent">{type.when}</p>
                </div>
                <p className="mt-2 text-sm/relaxed text-muted">{type.make}</p>
                <p className="mt-1 text-sm/relaxed">{type.note}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 hidden overflow-x-auto rounded-[1.5rem] border border-line bg-surface sm:block">
            <table className="w-full min-w-[46rem] text-left text-[0.95rem]">
              <caption className="sr-only">Дээлийн төрөл, улирал, хийц, онцлог</caption>
              <thead>
                <tr className="border-b border-line text-xs tracking-[0.12em] text-muted uppercase">
                  <th scope="col" className="px-6 py-4 font-semibold">Төрөл</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Улирал</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Хийц, материал</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Онцлог</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {DEEL_TYPES.map((type) => (
                  <tr key={type.name} className="align-top transition-colors hover:bg-bg/60">
                    <th scope="row" className="px-6 py-4 font-normal whitespace-nowrap">
                      <span className="block font-display font-semibold">{type.name}</span>
                      <span
                        className={`mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-[0.6875rem] font-semibold ${
                          type.kind === "deel"
                            ? "bg-accent/12 text-accent"
                            : "border border-line text-muted"
                        }`}
                      >
                        {type.kind === "deel" ? "Дээл" : "Давхар хувцас"}
                      </span>
                    </th>
                    <td className="px-6 py-4 whitespace-nowrap">{type.when}</td>
                    <td className="px-6 py-4 text-muted">{type.make}</td>
                    <td className="px-6 py-4 text-muted">{type.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ethnic() {
  return (
    <section id="yastan" className="bg-shar text-on-shar">
      <div className="shell py-20 md:py-28">
        <SectionHeader index="05" eyebrow="Ястан" title="Ястан бүр өөрийн дээлтэй" tone="gold">
          Монгол Улсад 20 гаруй ястан угсаатан амьдардаг бөгөөд тэдний дээл
          зах, энгэр, мөр, эмжээр, толгойн гоёлоороо ялгардаг.
        </SectionHeader>
        <EthnicTabs />
      </div>
    </section>
  );
}

function Kit() {
  return (
    <section id="khoslol" className="shell py-20 md:py-28">
      <SectionHeader index="06" eyebrow="Хослол" title="Дээлийн иж бүрдэл">
        Дээл ганцаараа бүрэн хувцас болдоггүй. Малгай, гутал, бүс, бүснээс
        зүүх эдлэл бүгд нэг хослол бөгөөд тус бүр өөрийн ёс, утгатай.
      </SectionHeader>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {KIT.map((item) => (
          <li
            key={item.id}
            className="flex flex-col rounded-[1.75rem] border border-line bg-surface p-6 sm:p-7"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                <KitIcon id={item.id} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg font-semibold">{item.name}</h3>
            </div>
            <p className="mt-4 text-[0.95rem]/relaxed text-muted">{item.text}</p>
            <p className="mt-auto pt-5">
              <span className="block border-t border-line pt-4 text-sm/relaxed">
                <span className="font-semibold">Мэдэх зүйл. </span>
                <span className="text-muted">{item.fact}</span>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Customs() {
  const yos = CUSTOMS.filter((custom) => custom.kind === "yos").length;
  return (
    <section id="yos" className="shell">
      <div className="border-t border-line py-20 md:py-28">
        <SectionHeader index="07" eyebrow="Ёс заншил" title="Дээл өмсөх ёс">
          Дээлийг хүний нэр төр, хийморьтой холбон үздэг тул түүнийг өмсөх,
          хадгалах ёс, цээр бий.
          <Cite id="ardiin" />
        </SectionHeader>
        <div className="mt-8 flex flex-wrap gap-2 text-sm font-semibold">
          <span className="rounded-full bg-nogoon px-3 py-1 text-white">
            Ёс · <span className="tabular-nums">{yos}</span>
          </span>
          <span className="rounded-full bg-ulaan px-3 py-1 text-white">
            Цээр · <span className="tabular-nums">{CUSTOMS.length - yos}</span>
          </span>
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CUSTOMS.map((custom) => (
            <li key={custom.title} className="rounded-[1.75rem] border border-line bg-surface p-6">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${
                  custom.kind === "yos" ? "bg-nogoon" : "bg-ulaan"
                }`}
              >
                {custom.kind === "yos" ? "Ёс" : "Цээр"}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{custom.title}</h3>
              <p className="mt-2 text-[0.95rem]/relaxed text-muted">{custom.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Proverbs() {
  return (
    <section aria-label="Зүйр үг" className="bg-yagaan text-white">
      <Khee className="text-shar" />
      <div className="shell grid gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        {PROVERBS.map((proverb) => (
          <figure key={proverb} className="min-w-0">
            <blockquote className="font-display text-[clamp(1.6rem,3.6vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.01em]">
              «{proverb}»
            </blockquote>
            <figcaption className="eyebrow mt-6 text-white/80">Монгол ардын зүйр үг</figcaption>
          </figure>
        ))}
      </div>
      <Khee className="text-shar" />
    </section>
  );
}

function Today() {
  return (
    <section
      id="unuudur"
      className="shell grid gap-12 py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:py-28"
    >
      <div className="min-w-0">
        <SectionHeader index="08" eyebrow="Өнөөдөр" title="Дээл өнөөдөр">
          Монголын загвар зохион бүтээгчид дээлийн зах, энгэр, туурай нударгыг
          орчин үеийн хэлбэр, даавуутай хослуулж байна. Баяр ёслолоос гадна
          дээлийг өдөр тутамдаа өмсөх залуус олширч байна.
        </SectionHeader>
      </div>
      <ul className="min-w-0 divide-y divide-line border-y border-line">
        {OCCASIONS.map((occasion) => (
          <li
            key={occasion.name}
            className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div className="min-w-0">
              <h3 className="font-display text-lg font-semibold">{occasion.name}</h3>
              <p className="mt-1 text-[0.95rem]/relaxed text-muted">
                {occasion.text}
                {occasion.source && <Cite id={occasion.source} />}
              </p>
            </div>
            <p className="order-first text-sm font-semibold text-accent tabular-nums sm:order-none sm:shrink-0 sm:text-right">
              {occasion.when}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Reference() {
  return (
    <section id="lavlakh" className="border-t border-line bg-surface">
      <div className="shell py-20 md:py-28">
        <SectionHeader index="09" eyebrow="Лавлах" title="Нэр томьёо ба эх сурвалж">
          Хуудсанд гарсан гол нэр томьёоны тайлбар, баримт бүрийн эх сурвалжийн
          жагсаалт.
        </SectionHeader>
        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="min-w-0">
            <h3 className="eyebrow text-muted">Нэр томьёо</h3>
            <dl className="mt-5 divide-y divide-line border-y border-line">
              {GLOSSARY.map((entry) => (
                <div
                  key={entry.term}
                  className="grid gap-1 py-3.5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
                >
                  <dt className="font-display text-[0.95rem] font-semibold">{entry.term}</dt>
                  <dd className="text-[0.95rem]/relaxed text-muted">{entry.text}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="min-w-0">
            <h3 className="eyebrow text-muted">Эх сурвалж</h3>
            <ol className="mt-5 divide-y divide-line border-y border-line">
              {SOURCES.map((source, i) => (
                <li
                  key={source.id}
                  id={`src-${source.id}`}
                  className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 px-2 py-4 transition-colors"
                >
                  <span className="font-display text-sm font-semibold text-accent tabular-nums">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold">
                      {source.author}
                      {source.year !== "—" && (
                        <span className="font-normal text-muted tabular-nums"> · {source.year}</span>
                      )}
                    </p>
                    <p className="mt-0.5 text-[0.95rem]/relaxed">{source.title}</p>
                    {"note" in source && (
                      <p className="mt-1 text-sm/relaxed text-muted">{source.note}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm/relaxed text-muted">
              Агуулгыг танилцуулах зорилгоор нэгтгэв. Аялагчдын ишлэлийг чөлөөт
              орчуулгаар буулгасан бөгөөд ёс заншил, хэв маяг нутаг, ястнаас
              хамааран ялгаатай байж болно.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-auto bg-shunu text-white">
      <Khee className="text-khukh" />
      <div className="shell grid gap-10 py-14 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <a href="#" className="flex items-center gap-2.5 font-display text-xl font-bold">
            <LogoMark className="h-9 w-9" />
            Дээл
          </a>
          <p className="mt-4 max-w-md text-sm/relaxed text-white/65">
            Монгол үндэсний хувцас дээлийн танилцуулга. Агуулга нь археологийн
            олдвор, түүхэн сурвалж, ардын уламжлалд тулгуурласан.
          </p>
        </div>
        <nav aria-label="Хөлийн цэс" className="min-w-0">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/80 transition-colors hover:text-shar">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="shell flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/55">
        <p>
          {SOURCES.length} эх сурвалж · {GLOSSARY.length} нэр томьёо
        </p>
        <a href="#" className="transition-colors hover:text-shar">
          Дээш буцах ↑
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <div className="bg-khukh">
          <Khee className="text-shar" />
        </div>
        <Facts />
        <Roles />
        <History />
        <Anatomy />
        <Types />
        <Ethnic />
        <Kit />
        <Customs />
        <Proverbs />
        <Today />
        <Reference />
      </main>
      <SiteFooter />
    </>
  );
}
