import { CheckCircle, ArrowRight } from "lucide-react";
import { whatsappLink, whatsappMessages } from "@/lib/data";

export default function About() {
  const highlights = [
    "Authentic, responsible, and memorable wildlife experiences",
    "Trusted by foreign travelers, photographers & nature lovers",
    "Close coordination with forest departments & local experts",
    "Safe wildlife encounters with ethical tourism practices",
  ];

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              About Us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Welcome to Your
              <br />
              <span className="gradient-text">Safari Partner</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Jungle Safari Experts was founded with a clear mission — to offer authentic, responsible, and memorable wildlife safari experiences in India.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We understand the expectations of foreign travelers, photographers, and nature lovers. Our team works closely with forest departments and local experts to ensure safe wildlife encounters, ethical tourism, and unforgettable jungle moments.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-accent-light"
            >
              Explore Safaris
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-jungle/40 to-accent/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-card-border">
              <div
                className="aspect-[4/5] bg-cover bg-center sm:aspect-[3/4]"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-card-border/60 bg-card/80 p-4 backdrop-blur-sm">
                <p className="text-sm font-medium text-foreground">
                  From thrilling tiger trails of Ranthambore to rare urban leopard encounters at Jhalana — we specialize in safe, ethical, and professionally managed jungle safaris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
