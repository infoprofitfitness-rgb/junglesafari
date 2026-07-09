import {
  Shield,
  Globe,
  BadgeIndianRupee,
  FileCheck,
  Users,
  Zap,
} from "lucide-react";
import { whyChooseUs } from "@/lib/data";

const icons = [Shield, Globe, BadgeIndianRupee, FileCheck, Users, Zap];

export default function WhyChooseUs() {
  return (
    <section className="border-y border-card-border bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Why Us
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Why Choose
            <br />
            <span className="gradient-text">Jungle Safari Experts?</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent/20 hover:bg-jungle/10 sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
