import { ArrowRight, Phone } from "lucide-react";
import { whatsappLink, whatsappMessages } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-16">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-jungle/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-light sm:text-sm">
            India&apos;s No.1 Safari Specialists
          </span>

          <h1 className="animate-fade-up text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Experience India&apos;s Wild
            <br />
            <span className="gradient-text">Like Never Before</span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg" style={{ animationDelay: "0.1s" }}>
            Explore India&apos;s most iconic wildlife destinations with{" "}
            <strong className="text-foreground">Jungle Safari Experts</strong> — handcrafted jungle safari experiences for international travelers and Indian wildlife enthusiasts.
          </p>

          <div className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4" style={{ animationDelay: "0.2s" }}>
            <span className="rounded-full border border-card-border bg-card px-4 py-2 text-xs font-medium text-muted sm:text-sm">
              Tiger Safaris
            </span>
            <span className="rounded-full border border-card-border bg-card px-4 py-2 text-xs font-medium text-muted sm:text-sm">
              Leopard Safaris
            </span>
            <span className="rounded-full border border-card-border bg-card px-4 py-2 text-xs font-medium text-muted sm:text-sm">
              Govt. Approved
            </span>
            <span className="rounded-full border border-card-border bg-card px-4 py-2 text-xs font-medium text-muted sm:text-sm">
              Expert Guides
            </span>
          </div>

          <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "0.3s" }}>
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-background transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/25 sm:w-auto"
            >
              Book Your Safari
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-card-border bg-card px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:bg-jungle/20 sm:w-auto"
            >
              <Phone className="h-4 w-4 text-accent" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
