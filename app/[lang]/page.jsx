"use client";

import Hero from "../components/Hero";
import MobileSubscribeBar from "../components/MobileSubscribeBar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PAYPAL_EMAIL = "klfministries7@gmail.com";
const PAYPAL_MONTHLY_PLAN =
  "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-35B24923MR782421ANFUQJKA";

const AMOUNTS = [10, 25, 50, 100, 200, 500, 1000];

/* ================= FEATURED DEVOTIONAL ================= */
function FeaturedDevotional({ lang }) {
  const devotionals = {
    en: [
      { verse: "Matthew 25:21", text: "Faithfulness is proven in unseen moments. God rewards obedience more than recognition." },
      { verse: "Luke 19:13", text: "Prepared people live differently. Christ calls us to active, faithful service." },
      { verse: "Matthew 10:8", text: "God uses rescued people to rescue others. Your testimony has purpose." },
    ],
    es: [
      { verse: "Mateo 25:21", text: "La fidelidad se demuestra en lo secreto. Dios recompensa la obediencia." },
      { verse: "Lucas 19:13", text: "Las personas preparadas viven diferente. Cristo llama a servir fielmente." },
      { verse: "Mateo 10:8", text: "Dios usa a los rescatados para rescatar a otros. Tu testimonio tiene propósito." },
    ],
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % devotionals[lang].length);
    }, 7000);
    return () => clearInterval(timer);
  }, [lang]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-10 text-center"
    >
      <h2 className="text-3xl font-bold text-blue-900 mb-2">
        {lang === "es" ? "Devocional Destacado" : "Featured Devotional"}
      </h2>

      <div className="w-16 h-1 bg-yellow-400 mx-auto my-4 rounded" />

      <p className="italic text-gray-600 mb-4">
        {devotionals[lang][index].verse}
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        {devotionals[lang][index].text}
      </p>

      <Link
        href={`/${lang}/devotionals`}
        className="inline-block font-medium text-blue-800 hover:underline"
      >
        {lang === "es" ? "Leer más devocionales →" : "Read more devotionals →"}
      </Link>
    </motion.div>
  );
}

/* ================= HOME PAGE ================= */
export default function Home({ params }) {
  const lang = params?.lang === "es" ? "es" : "en";

  const [showDonate, setShowDonate] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");

  const paypalLink = isMonthly
    ? PAYPAL_MONTHLY_PLAN
    : `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&currency_code=${currency}${amount ? `&amount=${amount}` : ""}`;

  const mailtoLink = `mailto:${PAYPAL_EMAIL}?subject=Bank Details Request&body=
Donation Type: ${isMonthly ? "Monthly" : "One-Time"}
Currency: ${currency}
Amount: ${amount || "Not specified"}
Please send me your bank details.`;

  return (
    <>
      <Hero lang={lang} />
      <div className="pt-24" />

      {/* FEATURED DEVOTIONAL */}
      <section className="bg-gray-50 py-28 px-6">
        <FeaturedDevotional lang={lang} />
      </section>

      {/* TESTIMONIES — RESTORED */}
      <section className="bg-white py-28 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          {lang === "es" ? "Testimonios" : "Testimonies"}
        </h2>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-gray-50 rounded-2xl shadow p-8 italic text-gray-700"
        >
          “This ministry reminded me that faithfulness in small things still matters to God.”
          <div className="mt-4 font-medium text-blue-900">— Listener</div>
        </motion.blockquote>

        <Link
          href={`/${lang}/testimonials`}
          className="inline-block mt-8 px-8 py-3 rounded-xl border border-blue-900 text-blue-900 font-medium hover:bg-blue-50 transition"
        >
          {lang === "es" ? "Enviar un Testimonio" : "Submit a Testimony"}
        </Link>
      </section>

      {/* SUPPORT */}
      <section
        id="support"
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-28 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          {lang === "es" ? "Apoye la Obra" : "Support the Mission"}
        </h2>

        <button
          onClick={() => setShowDonate(true)}
          className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition"
        >
          {lang === "es" ? "Dar Ahora" : "Give Now"}
        </button>
      </section>

      {/* DONATION MODAL */}
      {showDonate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowDonate(false)}
              className="absolute top-4 right-4 text-gray-500"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Support the Ministry
            </h2>

            <div className="flex justify-center gap-3 mb-4">
              <button onClick={() => setIsMonthly(false)} className={`px-4 py-2 rounded ${!isMonthly ? "bg-blue-900 text-white" : "bg-gray-100"}`}>One-Time</button>
              <button onClick={() => setIsMonthly(true)} className={`px-4 py-2 rounded ${isMonthly ? "bg-blue-900 text-white" : "bg-gray-100"}`}>Monthly</button>
            </div>

            {!isMonthly && (
              <>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setAmount(amt)}
                      className={`border rounded-lg py-2 ${amount == amt ? "bg-blue-900 text-white" : "bg-white"}`}
                    >
                      {currency} {amt}
                    </button>
                  ))}
                </div>

                <input
                  type="number"
                  placeholder="Custom amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 mb-6"
                />
              </>
            )}

            <a
              href={paypalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-900 text-white py-4 rounded-xl font-semibold"
            >
              Donate via PayPal
            </a>

            <a href={mailtoLink} className="block mt-4 text-sm text-blue-700 underline text-center">
              Request bank details
            </a>
          </div>
        </div>
      )}

      <MobileSubscribeBar lang={lang} />
    </>
  );
}
