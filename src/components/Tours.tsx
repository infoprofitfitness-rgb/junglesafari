import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { tours } from "@/lib/data";

export default function Tours() {
  return (
    <section id="tours" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our Signature Safari Tours
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Only the Best.
            <br />
            <span className="gradient-text">Only the Wildest.</span>
          </h2>
          <p className="mt-4 text-base text-muted">
            Handpicked wildlife destinations across Rajasthan — from urban leopards to royal Bengal tigers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {tours.map((tour) => (
            <article
              key={tour.id}
              className="group relative overflow-hidden rounded-2xl border border-card-border bg-card transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-jungle/10"
            >
              <div className="card-shine absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative h-52 overflow-hidden sm:h-56">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-accent/30 bg-background/80 px-3 py-1 text-xs font-semibold text-accent-light backdrop-blur-sm">
                  {tour.badge}
                </span>
              </div>

              <div className="relative p-6 sm:p-8">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  {tour.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {tour.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {tour.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <Check className="h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="group/btn mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-accent-light"
                >
                  Book Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
