import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ogCards, renderOgImage, type OgSlug } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(ogCards).map((slug) => ({ slug }));
}

const socialCardBase = readFile(
  join(process.cwd(), "public", "images", "ceres", "social-card-base.jpg"),
  "base64",
);

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const card = ogCards[slug as OgSlug] ?? ogCards.home;
  const backgroundSrc = `data:image/jpeg;base64,${await socialCardBase}`;
  return renderOgImage(card, backgroundSrc);
}
