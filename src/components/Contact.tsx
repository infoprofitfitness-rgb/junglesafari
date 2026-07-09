"use client";

import { useState } from "react";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { safariOptions, siteConfig } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-card-border bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Your Dream Safari Is
              <br />
              <span className="gradient-text">Just One Message Away</span>
            </h2>
            <p className="mt-6 text-base text-muted">
              Fill the form and our team will get back to you instantly — about safaris, pricing, or a custom itinerary.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent-light"
              >
                <Mail className="h-5 w-5 text-accent" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.phoneLink}
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent-light"
              >
                <Phone className="h-5 w-5 text-accent" />
                {siteConfig.phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted">
                <Clock className="h-5 w-5 text-accent" />
                {siteConfig.hours}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-card-border bg-card p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Send Quick Enquiry
            </h3>
            <p className="mt-1 text-sm text-muted">
              Fill your details — we&apos;ll reach out instantly.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl border border-jungle-light/40 bg-jungle/20 p-6 text-center">
                <p className="font-semibold text-accent-light">
                  Thank you for your enquiry!
                </p>
                <p className="mt-2 text-sm text-muted">
                  Our team will contact you shortly. For immediate assistance, call{" "}
                  <a href={siteConfig.phoneLink} className="text-accent-light hover:underline">
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-muted">
                    Mobile Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="safari" className="mb-1.5 block text-xs font-medium text-muted">
                    Select Safari
                  </label>
                  <select
                    id="safari"
                    name="safari"
                    required
                    className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                  >
                    <option value="">Choose a safari</option>
                    {safariOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent-light"
                >
                  <Send className="h-4 w-4" />
                  Submit Enquiry
                </button>
                <p className="text-center text-xs text-muted">
                  No spam. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
