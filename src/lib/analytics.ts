export const GOOGLE_ADS_CONVERSION = "AW-17986578873/_wzlCOjNm80cELnT1YBD";
export const GOOGLE_ADS_PAGE_VIEW = "AW-17986578873/pYnRCIiyuM0cELnT1YBD";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackOutboundClick(callback?: () => void) {
  if (typeof window === "undefined") {
    callback?.();
    return;
  }

  const gtag = window.gtag;
  if (!gtag) {
    callback?.();
    return;
  }

  const options: Record<string, unknown> = {
    send_to: GOOGLE_ADS_CONVERSION,
  };

  if (callback) {
    options.event_callback = callback;
  }

  gtag("event", "conversion", options);
}

export function trackPageView() {
  if (typeof window === "undefined") return;

  const gtag = window.gtag;
  if (!gtag) return;

  gtag("event", "conversion", {
    send_to: GOOGLE_ADS_PAGE_VIEW,
  });
}
