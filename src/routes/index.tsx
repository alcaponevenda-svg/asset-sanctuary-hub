import { createFileRoute } from "@tanstack/react-router";
import {
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

const CTA_HREF = "#topo";

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
    "group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-medium transition-all duration-500 hover:-translate-y-0.5";
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
            <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl">
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
              <GoldButton>Agendar Consultoria</GoldButton>
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
