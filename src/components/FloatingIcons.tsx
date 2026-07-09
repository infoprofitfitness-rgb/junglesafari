"use client";

import { MessageCircle, Phone } from "lucide-react";
import { whatsappLink, whatsappMessages } from "@/lib/data";
import TrackedLink from "@/components/TrackedLink";

export default function FloatingIcons() {
  return (
    <>
      <TrackedLink
        href={whatsappLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Call us on WhatsApp"
        className="group fixed bottom-6 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background shadow-lg shadow-accent/25 transition-all hover:scale-110 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/35 sm:bottom-8 sm:left-6 sm:h-16 sm:w-16"
      >
        <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg border border-card-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-lg opacity-0 transition-opacity group-hover:opacity-100 sm:block">
          Call Now
        </span>
      </TrackedLink>

      <TrackedLink
        href={whatsappLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 sm:bottom-8 sm:right-6 sm:h-16 sm:w-16"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
        <MessageCircle className="relative h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" strokeWidth={0} />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-card-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-lg opacity-0 transition-opacity group-hover:opacity-100 sm:block">
          WhatsApp Us
        </span>
      </TrackedLink>
    </>
  );
}
