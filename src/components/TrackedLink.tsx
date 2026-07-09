"use client";

import { trackOutboundClick } from "@/lib/analytics";

export default function TrackedLink({
  onClick,
  children,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackOutboundClick();
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
