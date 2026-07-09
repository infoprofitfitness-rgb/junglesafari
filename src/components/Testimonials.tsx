"use client";

import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Client Reviews
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Hear It From
            <br />
            <span className="gradient-text">Our Travelers</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="absolute -left-2 -top-4 h-10 w-10 text-accent/20 sm:-left-8" />
          <div className="rounded-2xl border border-card-border bg-card p-8 sm:p-12">
            {testimonials.map((item, i) => (
              <div
                key={item.name}
                className={`transition-all duration-500 ${
                  i === active
                    ? "block opacity-100"
                    : "hidden opacity-0"
                }`}
              >
                <p className="text-base leading-relaxed text-muted sm:text-lg">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-accent" : "w-2 bg-card-border"
                }`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
