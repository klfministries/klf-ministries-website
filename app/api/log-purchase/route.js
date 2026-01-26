import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const body = await request.json();

    const filePath = path.join(process.cwd(), "data", "purchases.json");

    let purchases = [];

    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      purchases = JSON.parse(raw);
    }

    const newPurchase = {
      id: Date.now(),
      item: body.item || "unknown",
      type: body.type || "unknown",
      price: body.price || 0,
      date: new Date().toISOString(),
    };

    purchases.push(newPurchase);

    fs.writeFileSync(filePath, JSON.stringify(purchases, null, 2));

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    console.error("Log purchase error:", err);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
    });
  }
}
