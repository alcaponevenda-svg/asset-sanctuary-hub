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
  Star,
  CalendarCheck,
  Search,
  FileCheck,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useState, useEffect } from "react";

import { Reveal } from "@/components/Reveal";
import heroAsset from "@/assets/mauro-hero-4.png.asset.json";
import heroBgAsset from "@/assets/hero-bg.png.asset.json";
import sobreBgAsset from "@/assets/sobre-bg-2.png.asset.json";
import aboutAsset from "@/assets/mauro-sobre-2.png.asset.json";
import areaInventario from "@/assets/area-inventario.jpg";
import avatar1 from "@/assets/avatar-1.jpg.asset.json";
import avatar2 from "@/assets/avatar-2.jpg.asset.json";
import avatar3 from "@/assets/avatar-3.jpg.asset.json";
import avatar4 from "@/assets/avatar-4.jpg.asset.json";
import avatar5 from "@/assets/avatar-5.jpg.asset.json";
import avatar6 from "@/assets/avatar-6.jpg.asset.json";



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

const testimonials = [
  {
    name: "Roberto Almeida",
    handle: "@roberto.almeida",
    avatar: avatar1,
    text: "O Dr. Mauro cuidou do planejamento sucessório da minha família com uma segurança impressionante. Hoje tenho tranquilidade sabendo que nosso patrimônio está protegido.",
  },
  {
    name: "Fernanda Costa",
    handle: "@fernanda.costa",
    avatar: avatar2,
    text: "Profissional extremamente competente e discreto. A holding familiar que estruturou para nós trouxe proteção real e eficiência tributária.",
  },
  {
    name: "Antônio Carvalho",
    handle: "@antonio.carvalho",
    avatar: avatar3,
    text: "Conduziu o inventário dos meus pais com maestria, evitando conflitos e reduzindo drasticamente os prazos. Recomendo com total confiança.",
  },
  {
    name: "Patrícia Mendonça",
    handle: "@patricia.mendonca",
    avatar: avatar4,
    text: "A consultoria em proteção patrimonial mudou a forma como vejo o futuro da minha empresa. Segurança jurídica e muita clareza em cada etapa.",
  },
  {
    name: "Ricardo Fonseca",
    handle: "@ricardo.fonseca",
    avatar: avatar5,
    text: "Trabalho impecável na estruturação da minha holding familiar. Atendimento personalizado, ágil e com a excelência que eu esperava.",
  },
  {
    name: "Camila Ribeiro",
    handle: "@camila.ribeiro",
    avatar: avatar6,
    text: "Excelência e humanidade em cada detalhe. O Dr. Mauro nos orientou com paciência e segurança durante todo o processo sucessório.",
  },
];


const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Agendamento da Consultoria",
    text: "Conversamos sobre sua situação, objetivos e necessidades patrimoniais de forma reservada e personalizada.",
  },
  {
    number: "02",
    icon: Search,
    title: "Análise Detalhada do Patrimônio",
    text: "Mapeamos bens, riscos e oportunidades para entender o cenário jurídico completo da sua família ou empresa.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Elaboração da Estratégia Jurídica",
    text: "Desenhamos a solução mais adequada: holding, planejamento sucessório, proteção de bens ou inventário.",
  },
  {
    number: "04",
    icon: Shield,
    title: "Implementação e Acompanhamento",
    text: "Colocamos a estratégia em prática com acompanhamento especializado em todas as etapas legais.",
  },
];

const fieldClass =
  "w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold/60";


function Index() {
  return (
    <div id="topo" className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBgAsset.url})` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[oklch(0.146_0_0_/_0.45)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,var(--background)_0%,transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_75%_20%,oklch(0.32_0.03_80/0.35),transparent_60%)]" />

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
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Atuação técnica e estratégica em proteção patrimonial, holding
              familiar, inventários e planejamento sucessório — em todo o Brasil.
            </p>
            <div className="mt-9">
              <GoldButton>Falar com advogado</GoldButton>
            </div>
          </div>

          <div className="relative animate-fade-in lg:h-[92vh] lg:scale-105">
            <div className="relative h-[420px] overflow-hidden sm:h-[560px] lg:h-full">
              <img
                src={heroAsset.url}
                alt="Dr. Mauro Monção Filho, advogado especialista em proteção patrimonial"
                width={1024}
                height={1408}
                className="h-full w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,var(--background)_2%,transparent_40%)]" />
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

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="relative overflow-hidden py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.32_0.03_80/0.15),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center">
            <Pill>Depoimentos</Pill>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              O que nossos clientes falam sobre nós:
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <article className="glass-card h-full rounded-md p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-premium)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={t.avatar.url}
                        alt={t.name}
                        width={48}
                        height={48}
                        loading="lazy"
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/20"
                      />
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.handle}</p>
                      </div>
                    </div>
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Google"
                    >
                      <path
                        d="M23.5 12.28c0-.86-.08-1.68-.22-2.47H12v4.68h6.45c-.28 1.48-1.12 2.73-2.38 3.57v2.97h3.85c2.25-2.08 3.55-5.14 3.55-8.75z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 24c3.24 0 5.96-1.08 7.94-2.91l-3.85-2.97c-1.07.72-2.44 1.14-4.09 1.14-3.15 0-5.82-2.13-6.77-4.99H1.45v3.07C3.42 21.3 7.4 24 12 24z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.23 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.66H1.45C.53 8.46 0 10.48 0 12.5c0 2.02.53 4.04 1.45 5.84l3.78-3.07z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.45-3.45C17.95 1.19 15.23 0 12 0 7.4 0 3.42 2.7 1.45 6.66l3.78 3.07c.95-2.86 3.62-4.98 6.77-4.98z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>

                  <div className="mt-4 flex gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-gold text-gold"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {t.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === 1 ? "bg-gold" : "bg-white/20"}`}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <GoldButton>Agendar Consultoria</GoldButton>
          </div>
        </div>
      </section>

      {/* JORNADA PASSO A PASSO */}
      <section className="section-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <Reveal>
              <Pill>Como Funciona</Pill>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Sua Jornada Patrimonial,{" "}
                <span className="text-gradient-gold">PASSO A PASSO!</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:ml-auto">
                Desde o primeiro contato, nos dedicamos a esclarecer e estruturar o
                seu cenário patrimonial, garantindo a melhor estratégia de proteção
                em todas as fases jurídicas.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 90}>
                <article className="glass-card group h-full rounded-md p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-premium)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--gradient-gold)]">
                    <step.icon
                      className="h-5 w-5 text-background"
                      strokeWidth={1.8}
                    />
                  </span>
                  <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                    Etapa {step.number}
                  </p>
                  <h3 className="mt-2 text-base font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative overflow-hidden py-28 lg:py-40">

        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-right opacity-60"
          style={{ backgroundImage: `url(${sobreBgAsset.url})` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,var(--background)_0%,transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--background)_0%,transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-[1.2fr_1.5fr] lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-md p-6 sm:p-10">
              <div className="relative overflow-hidden rounded-md bg-[var(--gradient-gold)] p-2">
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
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Quem é{" "}
              <span className="text-gradient-gold">Dr. Mauro Monção Filho</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Advogado especialista em Proteção Patrimonial, Planejamento
              Sucessório e Inventários. Atua auxiliando famílias e empresários na
              preservação de patrimônios, com soluções jurídicas personalizadas,
              segurança e discrição.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Com ampla experiência em estruturas patrimoniais e sucessões, é
              reconhecido pela abordagem estratégica e humanizada, atendendo
              clientes em todo o território nacional com excelência técnica.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-md border border-border bg-card px-4 py-6 text-center"
                >
                  <p className="text-3xl font-semibold text-gold">{stat.value}</p>
                  <p className="mt-1 text-xs leading-tight text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
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
