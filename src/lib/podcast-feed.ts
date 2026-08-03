import { siteContent } from "@/content/site";

export type PodcastEpisode = {
  kicker: string;
  title: string;
  description: string;
  duration: string;
  href: string;
};

const REQUEST_TIMEOUT_MS = 5_000;
const DESCRIPTION_MAX_LENGTH = 320;

function decodeXml(value: string): string {
  const entities: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&apos;": "'",
    "&#39;": "'",
    "&nbsp;": " ",
  };

  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
    .replace(/&#([0-9]+);/g, (_, code: string) =>
      String.fromCodePoint(Number.parseInt(code, 10)),
    )
    .replace(/&(amp|lt|gt|quot|apos|#39|nbsp);/g, (entity) =>
      entities[entity] ?? entity,
    );
}

function extractTag(xml: string, tag: string): string | null {
  const escapedTag = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = xml.match(
    new RegExp(`<${escapedTag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escapedTag}>`, "i"),
  );

  return match ? decodeXml(match[1].trim()) : null;
}

function plainText(value: string): string {
  return value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(value: string, maxLength: number): string {
  if (value.length <= maxLength) {
    return value;
  }

  const shortened = value.slice(0, maxLength + 1);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;
}

function formatDuration(value: string | null): string | null {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();

  if (/^\d+$/.test(trimmed)) {
    const totalSeconds = Number.parseInt(trimmed, 10);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes} min ${seconds.toString().padStart(2, "0")} sec`;
  }

  const parts = trimmed.split(":").map(Number);
  if (parts.some(Number.isNaN) || parts.length < 2 || parts.length > 3) {
    return null;
  }

  const [hours, minutes, seconds] =
    parts.length === 3 ? parts : [0, parts[0], parts[1]];

  if (hours > 0) {
    return `${hours} h ${minutes} min`;
  }

  return `${minutes} min ${seconds.toString().padStart(2, "0")} sec`;
}

function parseLatestEpisode(xml: string): PodcastEpisode | null {
  const item = xml.match(/<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/i)?.[1];
  if (!item) {
    return null;
  }

  const title = extractTag(item, "title");
  const description = extractTag(item, "description");

  if (!title) {
    return null;
  }

  return {
    kicker: siteContent.latestEpisode.kicker,
    title: plainText(title),
    description: description
      ? truncate(plainText(description), DESCRIPTION_MAX_LENGTH)
      : siteContent.latestEpisode.description,
    duration:
      formatDuration(extractTag(item, "itunes:duration")) ??
      siteContent.latestEpisode.duration,
    href: siteContent.podcast.spotifyUrl,
  };
}

export async function getLatestEpisode(): Promise<PodcastEpisode> {
  try {
    const response = await fetch(siteContent.podcast.feedUrl, {
      next: { revalidate: 3_600 },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });

    if (!response.ok) {
      throw new Error(`Podcast feed returned ${response.status}`);
    }

    const episode = parseLatestEpisode(await response.text());
    return episode ?? siteContent.latestEpisode;
  } catch (error) {
    console.warn("Unable to load the latest podcast episode; using fallback.", error);
    return siteContent.latestEpisode;
  }
}
