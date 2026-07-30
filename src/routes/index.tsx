import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Building2,
  Scale,
  FileText,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import heroAsset from "@/assets/mauro-hero-4.png.asset.json";
import heroBgAsset from "@/assets/hero-bg.png.asset.json";
import aboutAsset from "@/assets/mauro-sobre.png.asset.json";
import areaInventario from "@/assets/area-inventario.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Dr. Mauro Monção Filho | Proteção Patrimonial e Sucessória",
      },
      {
        name: "description",
        content:
          "Advogado especialista em proteção patrimonial, holding familiar, inventários e planejamento sucessório. Atendimento especializado em todo o Brasil.",
      },
      {
        property: "og:title",
        content: "Dr. Mauro Monção Filho | Proteção Patrimonial",
      },
      {
        property: "og:description",
        content:
          "Proteja o patrimônio da sua família com segurança jurídica e planejamento inteligente. Consultoria especializada em todo o Brasil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CTA_HREF = "#contato";

function Logo() {
  return (
    <a href="#topo" className="flex items-center gap-3" aria-label="Página inicial">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-gold/50 text-sm font-semibold tracking-[0.12em] text-gold">
        MM
      </span>
      <span className="flex flex-col border-l border-border pl-3 leading-tight">
        <span className="text-sm font-semibold tracking-[0.22em] uppercase">
          Mauro
        </span>
        <span className="text-sm font-semibold tracking-[0.22em] uppercase">
          Monção
        </span>
        <span className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground">
          Advocacia Patrimonial
        </span>
      </span>
    </a>
  );
}

function GoldButton({
  className = "",
  href = CTA_HREF,
  children,
}: {
  className?: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--gradient-gold)] px-8 py-4 text-sm font-medium text-background shadow-[var(--shadow-gold)] transition-all duration-500 hover:-translate-y-0.5 hover:brightness-110 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
    </a>
  );
}

function Pill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card/80 px-4 py-1.5 text-[11px] tracking-[0.12em] text-muted-foreground">
      {children}
    </span>
  );
}

const areas = [
  {
    icon: ShieldCheck,
    title: "Proteção Patrimonial",
    text: "Estruturas jurídicas sob medida para blindar e perpetuar o patrimônio da família.",
  },
  {
    icon: Scale,
    title: "Inventários",
    text: "Condução técnica do inventário, reduzindo custos, prazos e desgastes familiares.",
  },
  {
    icon: Building2,
    title: "Holding Familiar",
    text: "Constituição de holdings para proteção de bens, eficiência tributária e governança.",
  },
  {
    icon: FileText,
    title: "Planejamento Sucessório",
    text: "Transmissão organizada do patrimônio, prevenindo litígios e preservando legados.",
  },
];

const stats = [
  { value: "+300", label: "Famílias Atendidas" },
  { value: "+570", label: "Estruturas Criadas" },
  { value: "+1000", label: "Processos Conduzidos" },
];

const fieldClass =
  "w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold/60";

function Index() {
  return (
    <div id="topo" className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${heroBgAsset.url})` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,var(--background)_0%,transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_75%_20%,oklch(0.32_0.03_80/0.55),transparent_60%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pt-10 pb-20 lg:min-h-[92vh] lg:grid-cols-2 lg:px-10 lg:pt-0 lg:pb-0">
          <div className="animate-fade-up">
            <Logo />
            <h1 className="mt-10 text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl">
              <span className="text-gradient-gold">Advogado Patrimonial</span>
              <br />
              especializado na proteção
              <br />
              do seu patrimônio.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Atuação técnica e estratégica em proteção patrimonial, holding
              familiar, inventários e planejamento sucessório — em todo o Brasil.
            </p>
            <div className="mt-9">
              <GoldButton>Falar com advogado</GoldButton>
            </div>
          </div>

          <div className="relative animate-fade-in lg:h-[92vh]">
            <div className="relative h-[420px] overflow-hidden sm:h-[560px] lg:h-full">
              <img
                src={heroAsset.url}
                alt="Dr. Mauro Monção Filho, advogado especialista em proteção patrimonial"
                width={1024}
                height={1408}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,transparent_55%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--background)_2%,transparent_50%)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section id="atuacao" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center">
            <Pill>Área de Atuação</Pill>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="text-gradient-gold">Especialista</span> em diversas
              Áreas
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, i) => (
              <Reveal key={area.title} delay={i * 90}>
                <article className="glass-card group h-full rounded-md p-7 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-premium)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--gradient-gold)]">
                    <area.icon
                      className="h-5 w-5 text-background"
                      strokeWidth={1.8}
                    />
                  </span>
                  <h3 className="mt-6 text-base font-semibold">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {area.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#contato"
              className="rounded-full border border-border bg-card/80 px-6 py-2 text-xs tracking-[0.12em] text-muted-foreground transition-colors hover:border-gold/50 hover:text-foreground"
            >
              Ver mais
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-md p-6 sm:p-10">
              <div className="relative overflow-hidden rounded-md bg-[var(--gradient-gold)] p-2 sm:ml-10">
                <img
                  src={aboutAsset.url}
                  alt="Retrato do Dr. Mauro Monção Filho"
                  loading="lazy"
                  width={1024}
                  height={1536}
                  className="h-auto w-full rounded-sm object-contain"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,var(--background)_0%,transparent_55%)]" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Pill>Sobre</Pill>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Quem é{" "}
              <span className="text-gradient-gold">Dr. Mauro Monção Filho</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Advogado especialista em Proteção Patrimonial, Planejamento
              Sucessório e Inventários. Atua auxiliando famílias e empresários na
              preservação de patrimônios, com soluções jurídicas personalizadas,
              segurança e discrição.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Com ampla experiência em estruturas patrimoniais e sucessões, é
              reconhecido pela abordagem estratégica e humanizada, atendendo
              clientes em todo o território nacional com excelência técnica.
            </p>

            <div className="mt-9 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-md border border-border bg-card px-4 py-5 text-center"
                >
                  <p className="text-2xl font-semibold text-gold">{stat.value}</p>
                  <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <GoldButton>Falar com advogado</GoldButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <Pill>Contato</Pill>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Como <span className="text-gradient-gold">podemos ajudar</span> a
              proteger seu patrimônio?
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Para informações ou contato com nossa equipe, utilize o formulário
              ao lado, especificando o tipo de solicitação. Retornaremos o mais
              breve possível.
            </p>
            <div className="relative mt-10 overflow-hidden rounded-md">
              <img
                src={areaInventario}
                alt="Escritório de advocacia"
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-[var(--gradient-fade)]" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              className="glass-card rounded-md p-8 sm:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-2xl font-semibold">Converse conosco!</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Preencha o formulário e entraremos em contato o mais rápido
                possível para entender sua situação.
              </p>

              <div className="mt-7 space-y-5">
                <div>
                  <label className="text-xs font-medium" htmlFor="nome">
                    Nome Completo*
                  </label>
                  <input
                    id="nome"
                    required
                    placeholder="Ex: Mauro Monção"
                    className={`mt-2 ${fieldClass}`}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium" htmlFor="tel">
                      Telefone/WhatsApp*
                    </label>
                    <input
                      id="tel"
                      required
                      placeholder="Ex: (00) 00000-0000"
                      className={`mt-2 ${fieldClass}`}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium" htmlFor="email">
                      E-mail*
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Ex: nome@email.com"
                      className={`mt-2 ${fieldClass}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium" htmlFor="assunto">
                    Assunto*
                  </label>
                  <select id="assunto" required className={`mt-2 ${fieldClass}`}>
                    <option>Proteção Patrimonial</option>
                    <option>Inventário</option>
                    <option>Holding Familiar</option>
                    <option>Planejamento Sucessório</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium" htmlFor="mensagem">
                    Mensagem*
                  </label>
                  <textarea
                    id="mensagem"
                    required
                    rows={4}
                    placeholder="Descreva brevemente o seu caso"
                    className={`mt-2 ${fieldClass}`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[var(--gradient-gold)] py-4 text-sm font-medium text-background transition-all duration-500 hover:brightness-110"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="mt-10 border-t border-border bg-card/60 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3 lg:px-10">
          <Logo />

          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <span>
                <strong className="text-foreground">E-mail:</strong>{" "}
                contato@mauromoncao.adv.br
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <span>
                <strong className="text-foreground">Telefone/WhatsApp:</strong>{" "}
                (00) 00000-0000
              </span>
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-gold" />
              <span>
                <strong className="text-foreground">Atendimento:</strong> Todo o
                Brasil — presencial e online
              </span>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Acompanhe:</p>
            <div className="mt-4 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#topo"
                  aria-label="Rede social"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-gold/60 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-border px-6 pt-6 text-center text-xs text-muted-foreground lg:px-10">
          Copyright © Dr. Mauro Monção Filho - {new Date().getFullYear()} - Todos
          os direitos reservados
        </div>
      </footer>
    </div>
  );
}
