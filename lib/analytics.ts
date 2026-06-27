export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const isBrowser = typeof window !== "undefined";

export function isAnalyticsEnabled() {
  return Boolean(GA_ID && !GA_ID.includes("XXXXXXXXXX") && isBrowser && window.gtag);
}

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params?: EventParams) {
  const gtag = isBrowser ? window.gtag : undefined;

  if (!GA_ID || GA_ID.includes("XXXXXXXXXX") || !gtag) {
    return;
  }

  gtag("event", eventName, params);
}

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: EventParams
    ) => void;
    dataLayer?: unknown[];
  }
}
