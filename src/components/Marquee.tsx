import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="mt-[72px] overflow-hidden border-b border-card-border bg-jungle/30 py-2.5">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-muted sm:text-sm">
            <span className="text-accent">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
