import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

export async function GET() {
  const CHANNEL_ID = "UCtT0y-FZhV7lWUK1a97gLHw";
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

  try {
    const res = await fetch(feedUrl, { cache: "no-store" });
    const xml = await res.text();

    const parsed = await parseStringPromise(xml, { explicitArray: false });

    let entries = parsed.feed.entry || [];

    // Ensure it's always an array
    if (!Array.isArray(entries)) {
      entries = [entries];
    }

    const videos = entries.map((entry) => {
      const videoId = entry["yt:videoId"];

      return {
        id: videoId, // unified field name for frontend
        title: entry.title,
        publishedAt: entry.published,
        description: entry["media:group"]?.["media:description"] || "",
        thumbnail: entry["media:group"]?.["media:thumbnail"]?.$.url
          || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      };
    });

    // Sort newest first (just to be safe)
    videos.sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );

    return NextResponse.json({ videos });
  } catch (error) {
    console.error("YouTube RSS fetch failed:", error);
    return NextResponse.json({ videos: [] }, { status: 500 });
  }
}
