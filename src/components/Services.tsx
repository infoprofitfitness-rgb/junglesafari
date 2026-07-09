import {
  Ticket,
  Truck,
  UserCheck,
  Map,
  Hotel,
  Camera,
  Users,
  ArrowRight,
} from "lucide-react";
import { services, siteConfig, whatsappLink, whatsappMessages } from "@/lib/data";
import TrackedLink from "@/components/TrackedLink";

const serviceIcons = [Ticket, Truck, UserCheck, Map, Hotel, Camera, Users];

export default function Services() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              End-to-End
              <br />
              <span className="gradient-text">Safari Solutions</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              We provide complete safari travel solutions — from permit booking to on-ground coordination, so you can focus on the adventure.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-accent-light"
              >
                WhatsApp Us
              </TrackedLink>
              <TrackedLink
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-card-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/40"
              >
                Book a Safari
              </TrackedLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <div
                  key={service}
                  className="flex items-start gap-3 rounded-xl border border-card-border bg-card p-4 transition-all hover:border-accent/20"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-jungle/30">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {service}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BookCTA() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-jungle/40 via-card to-jungle/20 p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              Book Your Safari Now
            </h2>
            <p className="mt-4 text-base text-muted">
              Limited safari seats available every day — early booking recommended.
            </p>
            <p className="mt-2 text-sm text-accent-light">
              {siteConfig.email} · {siteConfig.phone}
            </p>
            <p className="mt-6 text-lg font-medium italic text-foreground">
              Your safari. Our responsibility. Your adventure begins here.
            </p>
            <TrackedLink
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-background transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/25"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
