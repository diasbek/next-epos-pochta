/**
 * Money-page CX + Google Search ops notes (not runtime).
 * GSC is already connected — no new env vars required for Google SEO cadence.
 * GA4 / GBP / GTM: deferred; Metrika remains primary analytics.
 * Shared lead events still fire via `trackEvent` / `SEO_ANALYTICS_GOALS` when GA is present.
 */
export const SEO_GOOGLE_BEHAVIOR = {
  moneyPages: [
    "/",
    "/calculator/",
    "/delivery/",
    "/delivery/tashkent/",
    "/delivery/samarkand/",
    "/delivery/bukhara/",
    "/delivery/fergana/",
    "/delivery/andijan/",
    "/delivery/namangan/",
    "/services/",
    "/services/door/",
    "/services/ecommerce/",
    "/services/documents/",
    "/services/cod/",
    "/services/courier/",
    "/business/",
    "/contacts/",
  ],
  /** GSC → URL Inspection → Request indexing after major publishes. */
  afterPublishInspect: [
    "https://epos-pochta.uz/",
    "https://epos-pochta.uz/calculator/",
    "https://epos-pochta.uz/delivery/",
    "https://epos-pochta.uz/delivery/tashkent/",
    "https://epos-pochta.uz/services/",
    "https://epos-pochta.uz/business/",
    "https://epos-pochta.uz/ru/",
    "https://epos-pochta.uz/ru/calculator/",
    "https://epos-pochta.uz/ru/delivery/",
    "https://epos-pochta.uz/ru/business/",
  ],
  gscMonitor: [
    "GSC already verified for epos-pochta.uz — keep sitemap submitted",
    "Watch Page indexing for /delivery/*, /services/*, /calculator/, /ru/*",
    "Confirm hreflang uz↔ru on money URLs when reviewing pages",
    "Filter Performance with google-watch-phrases.txt",
    "URL Inspection on afterPublishInspect after major publishes",
  ],
  napChecklist: [
    "Yandex Business + 2GIS listings match CMS / SITE_CONFIG NAP",
    "Contacts page map embed uses the same lat/lng",
    "JSON-LD LocalBusiness hasMap = Google Maps pin (same coordinates)",
    "Google Business Profile — deferred until ops decides to open it",
  ],
  cxNotes: [
    "Calculator always shows non-binding disclaimer before CTA to manager",
    "City and service landings deep-link to calculator or request-price",
    "Avoid dead-ends: every money page has primary + secondary CTA",
    "Do not change cluster→URL map without GSC evidence (avoid Yandex cannibalization)",
  ],
  monthlyCadence: [
    "GSC: Coverage / Page indexing + soft-404 / excluded thin routes",
    "GSC Performance: CTR on money URLs; retitle when CTR low at ≥100 impressions",
    "Refresh google-serp-baseline.tsv positions for SEO_SERP_MATRIX (Google.uz)",
    "Mobile PSI on / and /calculator/",
    "News: ≥1 uz and ≥1 ru URL per week",
    "URL Inspection on afterPublishInspect list after large content deploys",
  ],
} as const;
