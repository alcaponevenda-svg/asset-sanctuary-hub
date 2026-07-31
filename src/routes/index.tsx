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
  FolderOpen,
  Shield,
} from "lucide-react";


import { Reveal } from "@/components/Reveal";
import {
  AnimatedWords,
  DustParticles,
  MouseGlow,
  StatCard,
} from "@/components/AboutEffects";
import { AreaCard } from "@/components/AreaCard";
import bannerHeroAsset from "@/assets/banner-advogado-premium-1.png.asset.json";
import sobreBgAsset from "@/assets/sobre-bg-2.png.asset.json";
import aboutAsset from "@/assets/mauro-sobre-2.png";
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

function GoldButton({
  className = "",
  href = CTA_HREF,
  children,
  variant = "solid",
}: {
  className?: string;
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-medium transition-all duration-500 hover:-translate-y-0.5";
  const styles =
    variant === "solid"
      ? "text-background shadow-[var(--shadow-gold)] hover:brightness-110"
      : "border border-gold/60 bg-transparent text-gold hover:border-gold hover:bg-gold hover:text-background";
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      style={variant === "solid" ? { background: "var(--gradient-gold)" } : undefined}
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
    role: "Empresário",
    date: "Março 2025",
    avatar: avatar1,
    text: "O Dr. Mauro cuidou do planejamento sucessório da minha família com uma segurança impressionante. Hoje tenho tranquilidade sabendo que nosso patrimônio está protegido.",
  },
  {
    name: "Fernanda Costa",
    handle: "@fernanda.costa",
    role: "Médica",
    date: "Fevereiro 2025",
    avatar: avatar2,
    text: "Profissional extremamente competente e discreto. A holding familiar que estruturou para nós trouxe proteção real e eficiência tributária.",
  },
  {
    name: "Antônio Carvalho",
    handle: "@antonio.carvalho",
    role: "Produtor Rural",
    date: "Janeiro 2025",
    avatar: avatar3,
    text: "Conduziu o inventário dos meus pais com maestria, evitando conflitos e reduzindo drasticamente os prazos. Recomendo com total confiança.",
  },
  {
    name: "Patrícia Mendonça",
    handle: "@patricia.mendonca",
    role: "Sócia-Diretora",
    date: "Dezembro 2024",
    avatar: avatar4,
    text: "A consultoria em proteção patrimonial mudou a forma como vejo o futuro da minha empresa. Segurança jurídica e muita clareza em cada etapa.",
  },
  {
    name: "Ricardo Fonseca",
    handle: "@ricardo.fonseca",
    role: "Investidor",
    date: "Novembro 2024",
    avatar: avatar5,
    text: "Trabalho impecável na estruturação da minha holding familiar. Atendimento personalizado, ágil e com a excelência que eu esperava.",
  },
  {
    name: "Camila Ribeiro",
    handle: "@camila.ribeiro",
    role: "Arquiteta",
    date: "Outubro 2024",
    avatar: avatar6,
    text: "Excelência e humanidade em cada detalhe. O Dr. Mauro nos orientou com paciência e segurança durante todo o processo sucessório.",
  },
];


function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <article className="glass-card h-full rounded-md p-6 sm:p-7 transition-all duration-300 hover:scale-[1.03] hover:border-gold/50 hover:shadow-[var(--shadow-premium)]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, idx) => (
            <Star
              key={idx}
              className="h-4 w-4 fill-gold text-gold"
              strokeWidth={1.5}
            />
          ))}
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

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        {t.text}
      </p>

      <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
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
          <p className="text-xs text-muted-foreground">
            {t.role} · {t.date}
          </p>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({
  items,
  duration,
  reverse = false,
}: {
  items: typeof testimonials;
  duration: number;
  reverse?: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className="marquee group flex w-max">
      <div
        className="marquee-track flex"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className="w-[85vw] shrink-0 px-3 sm:w-[46vw] lg:w-[24vw] xl:w-[330px]"
          >
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialMarquee() {
  return (
    <div className="marquee-mask relative mt-14 overflow-hidden">
      <MarqueeRow items={testimonials} duration={38} />
    </div>
  );
}


const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Agendamento da Consultoria",
    text: "Conversamos sobre sua situação, objetivos e necessidades patrimoniais de forma reservada e personalizada.",
  },
  {
    number: "02",
    icon: FolderOpen,
    title: "Análise Detalhada do Patrimônio",
    text: "Mapeamos bens, riscos e oportunidades para entender o cenário jurídico completo da sua família ou empresa.",
  },
  {
    number: "03",
    icon: Scale,
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
  "field-premium w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none";


function Index() {
  return (
    <div id="topo" className="min-h-screen bg-background text-foreground">
      {/* HERO - Banner Premium */}
      <section className="relative overflow-hidden">
        {/* SEO text for crawlers */}
        <div className="sr-only">
          <h1>Advogado Patrimonial especializado na proteção do seu patrimônio.</h1>
          <p>
            Atuação técnica e estratégica em proteção patrimonial, holding
            familiar, inventários e planejamento sucessório — em todo o Brasil.
          </p>
        </div>

        <a
          href={CTA_HREF}
          className="group relative mx-auto block w-full overflow-hidden focus:outline-none"
          aria-label="Agendar consultoria com Dr. Mauro Monção Filho"
        >
          <div className="relative h-[50vh] w-full sm:h-[55vh] lg:h-auto">
            <img
              src={bannerHeroAsset.url}
              alt="Dr. Mauro Monção Filho — Advogado Patrimonial"
              width={1920}
              height={960}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.01] sm:object-[25%_center] lg:relative lg:h-auto lg:object-center"
              loading="eager"
              decoding="async"
            />
          </div>
          {/* Smooth fade to the next section */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,var(--background)_0%,transparent_20%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--background)_0%,transparent_20%)]" />
        </a>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section id="atuacao" className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              <span className="text-gradient-gold">Especialista</span> em diversas
              Áreas
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, i) => (
              <Reveal
                key={area.title}
                delay={i * 120}
                className="reveal-area h-full"
              >
                <AreaCard
                  icon={area.icon}
                  title={area.title}
                  text={area.text}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={520} className="mt-12 flex justify-center">
            <GoldButton>Agendar Consultoria</GoldButton>
          </Reveal>

        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.32_0.03_80/0.15),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center">
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Clientes que confiaram no nosso trabalho
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Veja o que nossos clientes dizem sobre a experiência e os
              resultados obtidos.
            </p>

          </Reveal>

          <TestimonialMarquee />

          <div className="mt-10 flex justify-center">
            <GoldButton>Agendar Consultoria</GoldButton>
          </div>
        </div>
      </section>


      {/* JORNADA PASSO A PASSO */}
      <section className="journey py-20 sm:py-28 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
            <Reveal>
              <h2 className="journey__title text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[3.25rem]">
                Sua Jornada Patrimonial,{" "}
                <span className="journey__gold">PASSO A PASSO.</span>
              </h2>
              <span className="journey__rule mt-7 block" aria-hidden="true" />
            </Reveal>
            <Reveal delay={100}>
              <p className="journey__lead max-w-md text-base leading-[1.8] lg:ml-auto lg:text-right">
                Desde o primeiro contato, nos dedicamos a esclarecer e estruturar o
                seu cenário patrimonial, garantindo a melhor estratégia de proteção
                em todas as fases jurídicas.
              </p>
            </Reveal>
          </div>

          <div className="relative mt-16 sm:mt-20 lg:mt-24">
            <span
              className="journey__line hidden lg:block"
              aria-hidden="true"
            />
            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
              {steps.map((step, i) => (
                <Reveal key={step.number} delay={i * 140}>
                  <article className="journey-card group h-full p-8 sm:p-9">
                    <div className="flex items-center justify-between">
                      <span className="journey-card__badge flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold tracking-wide">
                        {step.number}
                      </span>
                      <step.icon
                        className="journey-card__icon h-6 w-6"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="journey-card__title mt-8 text-lg leading-snug font-semibold">
                      {step.title}
                    </h3>
                    <p className="journey-card__text mt-4 text-base leading-[1.75]">
                      {step.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative overflow-hidden py-16 sm:py-28 lg:py-40">

        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-right opacity-60"
          style={{ backgroundImage: `url(${sobreBgAsset.url})` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-background/70 lg:hidden" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,var(--background)_0%,transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--background)_0%,transparent_30%)]" />
        <DustParticles />
        <MouseGlow />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.2fr_1.5fr] lg:gap-20 lg:px-10">
          <div className="about-left">
            <div className="about-photo-wrap relative overflow-hidden rounded-md sm:p-10 lg:p-6">
              <div className="about-photo-halo absolute inset-0" aria-hidden="true" />
              <div className="about-shoulder-light absolute inset-0" aria-hidden="true" />
              <div className="about-photo relative overflow-hidden rounded-md bg-[var(--gradient-gold)] p-1.5 sm:p-2">
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-sm bg-black">
                  <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_70%_30%,oklch(0.22_0.04_80/0.25),transparent_70%)]" />
                  <img
                    src={aboutAsset}
                    alt="Retrato do Dr. Mauro Monção Filho"
                    loading="lazy"
                    width={1024}
                    height={1536}
                    className="relative z-10 h-full w-full object-contain"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,var(--background)_0%,transparent_55%)]" />
              </div>
            </div>
          </div>

          <Reveal className="about-right" delay={120}>
            <div className="relative">
              <div className="about-text-glow absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                  <AnimatedWords text="Quem é" startDelay={100} />
                  <AnimatedWords
                    text="Dr. Mauro Monção Filho"
                    startDelay={220}
                    className="text-gradient-gold"
                  />
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  <span
                    className="about-line"
                    style={{ animationDelay: "520ms" }}
                  >
                    Advogado especialista em Proteção Patrimonial, Planejamento
                    Sucessório e Inventários. Atua auxiliando famílias e
                    empresários na preservação de patrimônios, com soluções
                    jurídicas personalizadas, segurança e discrição.
                  </span>
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <span
                    className="about-line"
                    style={{ animationDelay: "600ms" }}
                  >
                    Com ampla experiência em estruturas patrimoniais e sucessões,
                    é reconhecido pela abordagem estratégica e humanizada,
                    atendendo clientes em todo o território nacional com
                    excelência técnica.
                  </span>
                </p>

                <div className="relative mt-10">
                  <div
                    className="about-stats-glow absolute inset-0"
                    aria-hidden="true"
                  />
                  <div className="relative grid grid-cols-3 gap-3 sm:gap-5">
                    {stats.map((stat, i) => (
                      <StatCard
                        key={stat.label}
                        value={stat.value}
                        label={stat.label}
                        index={i}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <GoldButton className="about-cta">
                    Falar com advogado
                  </GoldButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative py-16 sm:py-20 lg:py-28">
        <div className="contact-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 sm:gap-14 lg:grid-cols-2 lg:px-10">
          <div>
            <Reveal className="reveal-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Como <span className="text-gradient-gold">podemos ajudar</span> a
                proteger seu patrimônio?
              </h2>
            </Reveal>
            <Reveal className="reveal-left" delay={120}>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Para informações ou contato com nossa equipe, utilize o
                formulário ao lado, especificando o tipo de solicitação.
                Retornaremos o mais breve possível.
              </p>
            </Reveal>
            <Reveal className="reveal-left" delay={240}>
              <div className="contact-img relative mt-10 overflow-hidden rounded-md">
                <img
                  src={areaInventario}
                  alt="Escritório de advocacia"
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-[var(--gradient-fade)]" />
              </div>
            </Reveal>
          </div>

          <Reveal className="reveal-right" delay={360}>
            <form
              className="glass-card rounded-md p-6 sm:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-2xl font-semibold">Converse conosco!</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Preencha o formulário e entraremos em contato o mais rápido
                possível para entender sua situação.
              </p>

              <div className="mt-7 space-y-5">
                <div
                  className="contact-field"
                  style={{ animationDelay: "460ms" }}
                >
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
                  <div
                    className="contact-field"
                    style={{ animationDelay: "530ms" }}
                  >
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
                  <div
                    className="contact-field"
                    style={{ animationDelay: "600ms" }}
                  >
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

                <div
                  className="contact-field"
                  style={{ animationDelay: "670ms" }}
                >
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

                <div
                  className="contact-field"
                  style={{ animationDelay: "740ms" }}
                >
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

                <div
                  className="contact-field"
                  style={{ animationDelay: "810ms" }}
                >
                  <button
                    type="submit"
                    className="contact-submit w-full rounded-full bg-[var(--gradient-gold)] py-4 text-sm font-medium text-background hover:brightness-110"
                  >
                    Enviar mensagem
                  </button>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="mt-10 border-t border-border bg-card/60 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
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
