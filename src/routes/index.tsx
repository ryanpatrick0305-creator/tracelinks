import { createFileRoute } from "@tanstack/react-router";

import bgHero from "@/assets/bg-hero.jpg.asset.json";
import bgAsset from "@/assets/bg.jpg.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
import cardTrabalhos from "@/assets/card-trabalhos.png.asset.json";
import cardContato from "@/assets/card-contato.png.asset.json";
import cardTrace from "@/assets/card-trace.png.asset.json";

const WHATSAPP = "https://wa.me/5531984815068";
const INSTAGRAM = "https://www.instagram.com/ryan_patrick_oliveira/";
const BEHANCE = "https://www.behance.net/ryansoares4";
const TRACE_LP = "https://lp.studiotrace.com.br/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Trace | Design sob demanda para agências" },
      {
        name: "description",
        content:
          "Ideias bem direcionadas geram grandes resultados. Veja os trabalhos do Studio Trace, conheça os formatos de trabalho e fale sobre o seu projeto.",
      },
      { property: "og:title", content: "Studio Trace | Design sob demanda para agências" },
      {
        property: "og:description",
        content:
          "Produção criativa recorrente, white label e sob demanda para agências de marketing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Socials({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-1 rounded-full border border-white/70 px-3 py-1.5 backdrop-blur-sm ${className}`}
    >
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="p-1.5 opacity-90 transition hover:opacity-100"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.33A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.03.79.81-2.95-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.12-.55.13-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42-.06-.13-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64 1.54.67 2.14.72 2.91.61.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="p-1.5 opacity-90 transition hover:opacity-100"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 3.06A6.74 6.74 0 1 0 18.74 12 6.74 6.74 0 0 0 12 5.26Zm0 11.12A4.38 4.38 0 1 1 16.38 12 4.38 4.38 0 0 1 12 16.38Zm6.98-11.4a1.58 1.58 0 1 1-1.58-1.57 1.58 1.58 0 0 1 1.58 1.57Z" />
        </svg>
      </a>
      <a
        href={BEHANCE}
        target="_blank"
        rel="noreferrer"
        aria-label="Behance"
        className="p-1.5 opacity-90 transition hover:opacity-100"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M9.1 5.4c1.9 0 3.2.9 3.2 2.8 0 1.1-.5 1.9-1.5 2.4 1.3.4 2 1.4 2 2.9 0 2.3-1.8 3.4-4 3.4H2V5.4h7.1ZM5 9.9h3.4c.9 0 1.4-.4 1.4-1.2 0-.8-.6-1.1-1.5-1.1H5v2.3Zm0 4.8h3.6c1 0 1.7-.4 1.7-1.4 0-1-.6-1.4-1.7-1.4H5v2.8ZM18.6 8.1c2.5 0 4 1.8 4 4.4v.7h-5.9c.1 1.2.9 1.9 2 1.9.9 0 1.5-.4 1.7-1h2.1c-.4 1.8-1.9 2.9-3.9 2.9-2.5 0-4.2-1.7-4.2-4.4 0-2.6 1.7-4.5 4.2-4.5Zm-1.9 3.6h3.7c-.1-1.1-.8-1.8-1.8-1.8s-1.7.7-1.9 1.8ZM21.6 5.9v1.5h-5V5.9h5Z" />
        </svg>
      </a>
    </div>
  );
}

function LinkCard({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_-30px_oklch(0.58_0.23_262/0.9)] transition duration-500 hover:border-trace-blue-soft/60 hover:shadow-[0_28px_80px_-30px_oklch(0.58_0.23_262/1)]"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full transition duration-700 group-hover:scale-[1.02]"
      />
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO — composição sobre o fundo BG primeira sessão */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero.url})` }}
      >
        {/* Leitura do conteúdo à direita + fundido suave com a seção seguinte */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/35" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background md:h-64" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col px-6 py-7 md:px-10">
          <header className="flex items-center justify-between">
            <a href="/" aria-label="Studio Trace">
              <img src={logoAsset.url} alt="Studio Trace" className="h-7 w-auto md:h-8" />
            </a>
            <Socials className="text-white" />
          </header>

          <div className="flex flex-1 items-center justify-end pt-14 pb-24 md:pb-32">
            <div className="w-full max-w-2xl text-left md:pl-24">
              <h1 className="font-display text-[2.3rem] leading-[1.18] tracking-wide uppercase md:text-[3.6rem]">
                Ideias bem direcionadas <span className="whitespace-nowrap">geram grandes</span> resultados.
              </h1>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary py-2.5 pr-2.5 pl-7 text-sm font-semibold text-primary-foreground shadow-[0_18px_50px_-15px_oklch(0.58_0.23_262/0.9)] transition hover:brightness-110 md:text-base"
              >
                Quero falar sobre meu projeto
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg text-primary">
                  ›
                </span>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
            <div className="h-10 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent md:h-14" />
            <span className="text-[9px] font-light tracking-[0.3em] text-white/40 uppercase">
              Role
            </span>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="relative mx-auto grid max-w-4xl gap-8 px-5 py-14 md:gap-10 md:py-24">
        <LinkCard
          href={BEHANCE}
          src={cardTrabalhos.url}
          alt="Ver trabalhos — um pouco dos projetos já desenvolvidos"
        />
        <LinkCard
          href={WHATSAPP}
          src={cardContato.url}
          alt="Entre em contato — vamos conversar sobre seu projeto"
        />
        <LinkCard
          href={TRACE_LP}
          src={cardTrace.url}
          alt="Conheça a Trace — produção criativa recorrente"
        />
      </section>

      {/* FOOTER */}
      <footer
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgAsset.url})` }}
      >
        {/* Fundido suave no topo do rodapé */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-3 px-5 py-16 text-center text-[11px] tracking-wide text-muted-foreground md:flex-row md:justify-between md:py-24 md:text-left">
          <p>© 2026 Studio Trace. Todos os direitos reservados.</p>
          <p>Design sob demanda · White label · Feito para agências</p>
        </div>
      </footer>
    </main>
  );
}
