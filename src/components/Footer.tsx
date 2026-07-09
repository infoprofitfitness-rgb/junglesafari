import { Mail, Phone, Clock } from "lucide-react";
import { navLinks, siteConfig, tours } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-card pb-24 md:pb-8">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="text-xl font-bold">
              <span className="gradient-text">Jungle</span>{" "}
              <span className="text-foreground">Safari Experts</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              India&apos;s trusted wildlife safari tour specialists — handcrafted jungle experiences for travelers worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Tours
            </h4>
            <ul className="mt-4 space-y-2">
              {tours.map((tour) => (
                <li key={tour.id}>
                  <a
                    href="#tours"
                    className="text-sm text-muted transition-colors hover:text-accent-light"
                  >
                    {tour.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent-light"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneLink}
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent-light"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {siteConfig.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted">
            Jungle Safari Experts © 2026. All Rights Reserved.
          </p>
          <p className="text-xs text-muted">
            Developed by{" "}
            <strong className="text-foreground">{siteConfig.developer}</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
