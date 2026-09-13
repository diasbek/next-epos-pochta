"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import type { SiteCopy } from "@/data/types";
import {
  getSettlementById,
  settlementLabel,
  uzbekistanHubSettlements,
} from "@/data/settlements";
import { Button } from "@/components/atoms/Button";
import { Input, Select } from "@/components/atoms/Input";
import { trackEvent } from "@/lib/analytics/events";
import { homeActionControls, homeActionRow } from "@/styles/ui";

function SwapIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 8h11.5M14 5.5 16.5 8 14 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 16H7.5M10 13.5 7.5 16 10 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomeTrackForm({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteCopy;
}) {
  const router = useRouter();
  const [trackNumber, setTrackNumber] = useState("");

  return (
    <form
      className={homeActionControls}
      onSubmit={(e) => {
        e.preventDefault();
        const number = trackNumber.trim();
        trackEvent("track_search_start");
        router.push(
          `${localePath(locale, "/tracking/")}?number=${encodeURIComponent(number)}`,
        );
      }}
    >
      <label className="sr-only" htmlFor="home-action-track">
        {copy.home.trackPlaceholder}
      </label>
      <Input
        id="home-action-track"
        name="track_number"
        size="sm"
        value={trackNumber}
        onChange={(e) => setTrackNumber(e.target.value)}
        placeholder={copy.home.trackPlaceholder}
        autoComplete="off"
        className="min-w-0 flex-1"
      />
      <Button
        type="submit"
        variant="secondary"
        size="sm"
        shape="rounded"
        width="mobile"
      >
        {copy.ui.track}
      </Button>
    </form>
  );
}

export function HomeQuoteForm({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteCopy;
}) {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const hubs = uzbekistanHubSettlements;

  return (
    <form
      className={homeActionControls}
      onSubmit={(e) => {
        e.preventDefault();
        trackEvent("request_price_start", { source: "home_quote" });
        const params = new URLSearchParams();
        const fromMeta = getSettlementById(from);
        const toMeta = getSettlementById(to);
        if (fromMeta) params.set("from", settlementLabel(fromMeta, locale));
        if (toMeta) params.set("to", settlementLabel(toMeta, locale));
        const qs = params.toString();
        router.push(
          `${localePath(locale, "/calculator/")}${qs ? `?${qs}` : ""}`,
        );
      }}
    >
      <div className={homeActionRow}>
        <label className="sr-only" htmlFor="home-action-from">
          {copy.home.quoteFrom}
        </label>
        <Select
          id="home-action-from"
          name="from"
          size="sm"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="min-w-0 flex-1"
        >
          <option value="">{copy.home.quoteFrom}</option>
          {hubs.map((s) => (
            <option key={s.id} value={s.id}>
              {settlementLabel(s, locale)}
            </option>
          ))}
        </Select>
        <Button
          type="button"
          variant="outline"
          size="sm"
          shape="rounded"
          iconOnly
          aria-label={copy.home.quoteSwap}
          onClick={() => {
            setFrom(to);
            setTo(from);
          }}
        >
          <SwapIcon />
        </Button>
        <label className="sr-only" htmlFor="home-action-to">
          {copy.home.quoteTo}
        </label>
        <Select
          id="home-action-to"
          name="to"
          size="sm"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="min-w-0 flex-1"
        >
          <option value="">{copy.home.quoteTo}</option>
          {hubs.map((s) => (
            <option key={s.id} value={s.id}>
              {settlementLabel(s, locale)}
            </option>
          ))}
        </Select>
      </div>
      <Button
        type="submit"
        variant="primary"
        size="sm"
        shape="rounded"
        width="mobile"
      >
        {copy.home.quoteCta}
      </Button>
    </form>
  );
}
