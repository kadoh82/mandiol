import fs from "fs";
import path from "path";

/** Shared data directory (repo root: src/data). */
const DATA_DIR = path.join(process.cwd(), "..", "src", "data");

export type SupportAgency = {
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

export type Video = {
  id: string;
  title: string;
  youtubeId: string;
  url: string;
  category: string;
  offences: string[];
  description: string;
  duration: string;
  recommended: boolean;
};

export function getSupportAgencies(): SupportAgency[] {
  const raw = fs.readFileSync(
    path.join(DATA_DIR, "supportAgencies.json"),
    "utf-8"
  );
  return JSON.parse(raw);
}

export function getVideos(): Video[] {
  const raw = fs.readFileSync(path.join(DATA_DIR, "videos.json"), "utf-8");
  return JSON.parse(raw);
}

/** Get agencies relevant to a specific offence ID. */
export function getAgenciesForOffence(offenceId: string): SupportAgency[] {
  return getSupportAgencies().filter((a) => a.offences.includes(offenceId));
}
