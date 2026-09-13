/**
 * Off-page / ops checklist for Google + Yandex (uz/ru) SEO program.
 * Track completion outside the repo (GSC, Webmaster, maps, PR).
 * Google money-page notes: `SEO_GOOGLE_BEHAVIOR` in google-behavior.ts.
 * Yandex money-page notes: `SEO_YANDEX_BEHAVIOR` in yandex-behavior.ts.
 *
 * GSC is already connected. GA4 / GBP / new env vars — deferred.
 */
export const SEO_OPS_CHECKLIST = [
  {
    id: "gsc",
    title: "Google Search Console (already live)",
    items: [
      "Keep https://epos-pochta.uz/sitemap.xml submitted",
      "Monitor Page indexing for /delivery/* , /services/* , /calculator/, /ru/*",
      "Check hreflang pairs uz↔ru on money URLs",
      "Filter Performance with google-watch-phrases.txt",
      "URL Inspection on SEO_GOOGLE_BEHAVIOR.afterPublishInspect after major publishes",
      "Monthly CTR review on head + city + service titles (≥100 impressions)",
    ],
  },
  {
    id: "yandex_webmaster",
    title: "Yandex Webmaster",
    items: [
      "Prefer HTTPS host https://epos-pochta.uz (not only http mirror)",
      "Verify via NEXT_PUBLIC_YANDEX_SITE_VERIFICATION / META_TAG",
      "Set site region = Узбекистан",
      "Submit https://epos-pochta.uz/sitemap.xml",
      "Monitor SQI + excluded URLs (LOW_QUALITY on thin routes)",
      "Validate LocalBusiness / CourierService JSON-LD",
      "Recrawl money URLs after major publishes",
    ],
  },
  {
    id: "analytics_goals",
    title: "Metrika goals (primary; GA4 deferred)",
    items: [
      "price_estimate_shown",
      "request_price_start",
      "price_form_submit_success",
      "business_connect_submit_success",
      "track_support_call_click",
    ],
  },
  {
    id: "local_citations",
    title: "Local NAP",
    items: [
      "Yandex Business / maps card = SITE_CONFIG / CMS NAP",
      "2GIS listing matches phone, address, hours",
      "Contacts map pin matches the same lat/lng",
      "Google Business Profile — deferred",
    ],
  },
  {
    id: "serp_matrix",
    title: "SERP matrix (SEO_SERP_MATRIX)",
    items: [
      "Fill google-serp-baseline.tsv positions for Google.uz (uz + ru)",
      "Snapshot Yandex positions for the same matrix queries",
      "Compare against emu / bts / yandex delivery / pony / aramex",
      "Refresh monthly; escalate thin routes if GSC excluded / Yandex LOW_QUALITY rises",
    ],
  },
  {
    id: "content_cadence",
    title: "Content + Google monthly rhythm",
    items: [
      "Weekly: ≥1 uz and ≥1 ru news URL (or full bilingual pair)",
      "Refresh city FAQ when coverage changes",
      "Monthly title CTR review uz vs ru on head hubs (GSC)",
      "Monthly Mobile PSI on / and /calculator/",
      "After large deploys: GSC URL Inspection on money URLs (google-behavior.ts)",
    ],
  },
] as const;
