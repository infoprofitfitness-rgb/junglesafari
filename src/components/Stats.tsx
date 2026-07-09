import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="border-y border-card-border bg-card/50 py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold gradient-text sm:text-4xl lg:text-5xl">
              {stat.value}
            </div>
            <p className="mt-2 text-xs text-muted sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
