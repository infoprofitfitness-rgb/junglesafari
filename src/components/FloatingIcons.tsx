"use client";

import { MessageCircle, CalendarCheck } from "lucide-react";
import { whatsappLink, whatsappMessages } from "@/lib/data";
import TrackedLink from "@/components/TrackedLink";

export default function FloatingIcons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-6">
      <TrackedLink
        href={whatsappLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book safari on WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-accent text-background shadow-lg shadow-accent/25 transition-all hover:scale-110 hover:bg-accent-light hover:shadow-xl hover:shadow-accent/35 sm:h-14 sm:w-14"
      >
        <CalendarCheck className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-card-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-lg opacity-0 transition-opacity group-hover:opacity-100 sm:block">
          Book Safari
        </span>
      </TrackedLink>

      <TrackedLink
        href={whatsappLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 sm:h-16 sm:w-16"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
        <MessageCircle className="relative h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" strokeWidth={0} />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-card-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-lg opacity-0 transition-opacity group-hover:opacity-100 sm:block">
          WhatsApp Us
        </span>
      </TrackedLink>
    </div>
  );
}
