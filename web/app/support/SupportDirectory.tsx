"use client";

import { useState } from "react";

type Agency = {
  id: string;
  name: string;
  type: string[];
  phone: string | null;
  hours: string;
  website: string;
  chat: boolean;
  regions: string[];
  offences: string[];
  description: string;
  free: boolean;
};

type Props = {
  agencies: Agency[];
  regions: string[];
  offenceTypes: { id: string; title: string }[];
};

export default function SupportDirectory({
  agencies,
  regions,
  offenceTypes,
}: Props) {
  const [offenceFilter, setOffenceFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const filtered = agencies.filter((a) => {
    if (offenceFilter && !a.offences.includes(offenceFilter)) return false;
    if (regionFilter && !a.regions.includes(regionFilter)) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-heading text-2xl text-plum">Find support</h1>
        <p className="mt-1 text-sm text-ink-muted">
          {agencies.length} organisations ready to help — all verified, most
          free and confidential.
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        <select
          value={offenceFilter}
          onChange={(e) => setOffenceFilter(e.target.value)}
          className="flex-1 rounded-xl border border-border bg-white px-3 py-2 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-rose"
        >
          <option value="">All offence types</option>
          {offenceTypes.map((o) => (
            <option key={o.id} value={o.id}>
              {o.title}
            </option>
          ))}
          <option value="coercive-control">Coercive control</option>
          <option value="domestic-abuse">Domestic abuse</option>
          <option value="historic">Historic / non-recent</option>
        </select>

        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
          className="flex-1 rounded-xl border border-border bg-white px-3 py-2 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-rose"
        >
          <option value="">All regions</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <p className="text-xs text-ink-muted">
        Showing {filtered.length} of {agencies.length} services
      </p>

      {/* Agency cards */}
      <div className="space-y-3">
        {filtered.map((a) => (
          <div
            key={a.id}
            className="rounded-2xl border border-border bg-white p-4 space-y-2"
          >
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-sm font-bold text-plum">{a.name}</h2>
              {a.free && (
                <span className="shrink-0 rounded-full bg-sage-50 px-2 py-0.5 text-[10px] font-medium text-sage-600">
                  Free
                </span>
              )}
            </div>

            <p className="text-xs text-ink-muted leading-relaxed">
              {a.description}
            </p>

            <div className="flex flex-wrap gap-1">
              {a.type.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-plum-50 px-2 py-0.5 text-[10px] font-medium text-plum"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-1 text-xs">
              {a.phone && (
                <a
                  href={`tel:${a.phone.replace(/\s/g, "")}`}
                  className="inline-flex min-h-[44px] items-center gap-1 rounded-xl bg-rose px-3 py-2 font-medium text-white"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {a.phone}
                </a>
              )}
              {a.website && (
                <a
                  href={`https://${a.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1 rounded-xl border border-border bg-white px-3 py-2 font-medium text-plum hover:bg-plum-50"
                >
                  Website
                </a>
              )}
              {a.chat && (
                <span className="text-sage-600 font-medium">Live chat</span>
              )}
            </div>

            <p className="text-[10px] text-ink-muted">{a.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
