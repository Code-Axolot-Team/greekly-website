export const GA_MEASUREMENT_ID = 'G-E35V0ZVEE7';

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}
