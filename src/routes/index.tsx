import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Building2,
  Scale,
  Users,
  MapPin,
  Sparkles,
  Lock,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
  Check,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import heroLawyer from "@/assets/hero-lawyer.jpg";
import aboutLawyer from "@/assets/about-lawyer.jpg";
import areaPatrimonial from "@/assets/area-patrimonial.jpg";
import areaInventario from "@/assets/area-inventario.jpg";
import areaHolding from "@/assets/area-holding.jpg";
import areaSucessorio from "@/assets/area-sucessorio.jpg";

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
      <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/50 text-sm font-semibold tracking-[0.15em] text-gold">
        MM
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="text-sm font-semibold tracking-[0.22em] uppercase">
          Mauro Monção
        </span>
        <span className="text-[10px] tracking-[0.32em] uppercase text-muted-foreground">
          Advocacia Patrimonial
        </span>
      </span>
    </a>
  );
}

function CtaButton({
  className = "",
  variant = "solid",
}: {
  className?: string;
  variant?: "solid" | "outline";
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-sm px-8 py-4 text-sm font-medium tracking-[0.08em] uppercase transition-all duration-500";
  const styles =
    variant === "solid"
      ? "bg-card text-foreground border border-gold/40 shadow-[var(--shadow-premium)] hover:border-gold hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5"
      : "border border-border text-foreground hover:border-gold/60 hover:bg-card";
  return (
    <a href={CTA_HREF} className={`${base} ${styles} ${className}`}>
      Agendar Consultoria
      <ArrowRight className="h-4 w-4 text-gold transition-transform duration-500 group-hover:translate-x-1" />
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.32em] uppercase text-gold">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </span>
  );
}

const audiences = [
  {
    icon: Users,
    title: "Famílias",
    text: "Famílias que desejam proteger seu patrimônio e garantir tranquilidade às próximas gerações.",
  },
  {
    icon: Building2,
    title: "Empresários",
    text: "Empresários que buscam segurança jurídica e blindagem do patrimônio pessoal e empresarial.",
  },
  {
    icon: Scale,
    title: "Inventários",
    text: "Pessoas que desejam organizar inventários com agilidade, discrição e correção técnica.",
  },
  {
    icon: ShieldCheck,
    title: "Sucessão",
    text: "Quem deseja evitar conflitos sucessórios e preservar a harmonia familiar no futuro.",
  },
];

const areas = [
  {
    image: areaPatrimonial,
    title: "Planejamento Patrimonial",
    text: "Estruturas jurídicas sob medida para organizar, blindar e perpetuar o patrimônio construído.",
  },
  {
    image: areaInventario,
    title: "Inventário",
    text: "Condução técnica e sensível do inventário, reduzindo custos, prazos e desgastes familiares.",
  },
  {
    image: areaHolding,
    title: "Holding Familiar",
    text: "Constituição de holdings para proteção de bens, eficiência tributária e governança familiar.",
  },
  {
    image: areaSucessorio,
    title: "Planejamento Sucessório",
    text: "Transmissão organizada e segura do patrimônio, prevenindo litígios e preservando legados.",
  },
];

const steps = [
  { n: "01", title: "Agendamento", text: "Agendamento da consultoria em horário reservado e sigiloso." },
  { n: "02", title: "Diagnóstico", text: "Análise detalhada do patrimônio, riscos e cenário familiar." },
  { n: "03", title: "Estratégia", text: "Elaboração da estratégia jurídica personalizada e documentada." },
  { n: "04", title: "Implementação", text: "Implementação com acompanhamento especializado e contínuo." },
];

const differentials = [
  { icon: MapPin, title: "Atendimento Nacional", text: "Consultoria presencial e remota em todo o território brasileiro." },
  { icon: Sparkles, title: "Estratégias Personalizadas", text: "Nenhuma solução de prateleira: cada estrutura é única." },
  { icon: ShieldCheck, title: "Segurança Jurídica", text: "Estruturas sólidas, documentadas e tecnicamente defensáveis." },
  { icon: HeartHandshake, title: "Atendimento Humanizado", text: "Escuta atenta ao contexto e aos valores de cada família." },
  { icon: GraduationCap, title: "Especialização em Patrimônio", text: "Atuação dedicada a proteção patrimonial e sucessões." },
  { icon: Lock, title: "Confidencialidade Absoluta", text: "Discrição integral sobre informações e bens do cliente." },
];

function Index() {
  return (
    <div id="topo" className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Logo />
          <nav className="hidden items-center gap-9 text-sm text-muted-foreground lg:flex">
            <a href="#consultoria" className="transition-colors hover:text-foreground">
              Consultoria
            </a>
            <a href="#atuacao" className="transition-colors hover:text-foreground">
              Áreas de atuação
            </a>
            <a href="#atendimento" className="transition-colors hover:text-foreground">
              Atendimento
            </a>
            <a href="#sobre" className="transition-colors hover:text-foreground">
              Sobre
            </a>
          </nav>
          <a
            href={CTA_HREF}
            className="hidden rounded-sm border border-gold/40 px-6 py-3 text-xs font-medium tracking-[0.14em] uppercase transition-all duration-500 hover:border-gold hover:shadow-[var(--shadow-gold)] md:inline-flex"
          >
            Agendar Consultoria
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 lg:pt-0">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:min-h-screen lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-0">
          <div className="animate-fade-up">
            <SectionLabel>Advocacia Patrimonial</SectionLabel>
            <h1 className="mt-7 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
              Proteja o patrimônio da sua família com{" "}
              <span className="text-gradient-gold">segurança jurídica</span> e
              planejamento inteligente.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Evite conflitos familiares, reduza riscos jurídicos e preserve o
              patrimônio conquistado ao longo da vida por meio de estratégias
              legais personalizadas.
            </p>
            <p className="mt-3 text-sm tracking-[0.12em] uppercase text-gold">
              Atendimento especializado em todo o Brasil
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CtaButton />
              <a
                href="#atuacao"
                className="inline-flex items-center gap-2 text-sm tracking-[0.08em] uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                Conhecer áreas de atuação
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in lg:h-screen">
            <div className="relative h-[440px] overflow-hidden rounded-sm border border-border sm:h-[560px] lg:h-full lg:rounded-none lg:border-0">
              <img
                src={heroLawyer}
                alt="Dr. Mauro Monção Filho, advogado especialista em proteção patrimonial, em seu escritório"
                width={1024}
                height={1408}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,transparent_45%)] opacity-90" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--background)_2%,transparent_45%)]" />
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section id="consultoria" className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <SectionLabel>Perfil de clientes</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Para quem é essa consultoria?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Um atendimento reservado, técnico e estratégico para quem entende
              que patrimônio se preserva com planejamento.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <article className="glass-card group h-full rounded-sm p-8 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-premium)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold/30 bg-gold-soft">
                    <item.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-7 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section id="atuacao" className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <SectionLabel>Atuação</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Áreas de atuação
            </h2>
            <p className="mt-5 text-muted-foreground">
              Soluções jurídicas construídas com precisão técnica para proteger
              o que foi conquistado ao longo de gerações.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {areas.map((area, i) => (
              <Reveal key={area.title} delay={i * 100}>
                <article className="group relative h-full overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-premium)]">
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <img
                      src={area.image}
                      alt={area.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[var(--gradient-fade)]" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold">{area.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {area.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA - FUNDO BRANCO */}
      <section id="atendimento" className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <SectionLabel>Processo</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Como funciona o atendimento?
            </h2>
            <p className="mt-5 text-muted-foreground">
              Um método claro, em quatro etapas, do primeiro contato à
              implementação da estratégia.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 90} className="bg-card">
                <div className="h-full p-8 transition-colors duration-500 hover:bg-background">
                  <span className="text-3xl font-semibold text-gold">{step.n}</span>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-sm border border-border">
              <img
                src={aboutLawyer}
                alt="Retrato do Dr. Mauro Monção Filho em seu escritório de advocacia"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--background)_0%,transparent_45%)] opacity-70" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionLabel>Sobre o advogado</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Dr. Mauro Monção Filho
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Advogado especialista em Proteção Patrimonial, Planejamento
              Sucessório e Inventários.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Atua auxiliando famílias e empresários na preservação de
              patrimônios, oferecendo soluções jurídicas personalizadas com
              segurança, discrição e excelência.
            </p>
            <p className="mt-6 text-sm tracking-[0.12em] uppercase text-gold">
              Atendimento em todo o território nacional
            </p>
            <div className="mt-10">
              <CtaButton variant="outline" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <SectionLabel>Diferenciais</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Por que confiar seu patrimônio a este escritório
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="glass-card flex h-full items-start gap-5 rounded-sm p-8 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-premium)]">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold/30 bg-gold-soft">
                    <item.icon className="h-4.5 w-4.5 text-gold" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="flex items-center gap-2 text-base font-semibold">
                      <Check className="h-4 w-4 text-gold" />
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="border-t border-border py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <div className="glass-card rounded-sm px-8 py-16 shadow-[var(--shadow-premium)] sm:px-16">
              <SectionLabel>Consultoria reservada</SectionLabel>
              <h2 className="mt-7 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Proteja hoje aquilo que levou anos para construir.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Agende uma consultoria e descubra como preservar seu patrimônio
                com segurança jurídica.
              </p>
              <div className="mt-10 flex justify-center">
                <CtaButton />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-border bg-background py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-10">
          <Logo />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Dr. Mauro Monção Filho</p>
            <p className="mt-1">Advogado Especialista em Proteção Patrimonial</p>
          </div>
          <p className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
            © {new Date().getFullYear()} — Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
