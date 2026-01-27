import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

export async function GET() {
  const CHANNEL_ID = "UCtT0y-FZhV7lWUK1a97gLHw";

  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

  try {
    const res = await fetch(feedUrl);
    const xml = await res.text();

    const parsed = await parseStringPromise(xml, { explicitArray: false });
    const entries = parsed.feed.entry || [];

    const videos = entries.slice(0, 6).map((entry) => {
      const videoId = entry["yt:videoId"];

      return {
        id: { videoId },
        snippet: {
          title: entry.title,
          publishedAt: entry.published,
        },
      };
    });

    return NextResponse.json({ items: videos });
  } catch (error) {
    console.error("YouTube RSS fetch failed:", error);
    return NextResponse.json({ items: [] }, { status: 500 });
  }
}
