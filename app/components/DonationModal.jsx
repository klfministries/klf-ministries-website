"use client";

import { useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";

const PAYPAL_EMAIL = "klfministries7@gmail.com";
const MONTHLY_PLAN_ID = "P-35B24923MR782421ANFUQJKA";
const AMOUNTS = [10, 25, 50, 100, 200, 500, 1000];

export default function DonationModal() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("one");
  const [amount, setAmount] = useState("");
  const [success, setSuccess] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();

  /* ================= OPEN FROM EVENT ================= */
  useEffect(() => {
    const openHandler = () => {
      setSuccess(false);
      setOpen(true);
    };

    window.addEventListener("donation:open", openHandler);
    return () =>
      window.removeEventListener("donation:open", openHandler);
  }, []);

  /* ================= SUCCESS DETECTION ================= */
  useEffect(() => {
    if (searchParams.get("donation") === "success") {
      setOpen(true);
      setSuccess(true);
    }
  }, [searchParams]);

  /* ================= ESC + SCROLL LOCK ================= */
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  /* ================= PAYPAL LINKS ================= */
  const baseReturnUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${pathname}?donation=success`
      : "";

  const paypalLink =
    type === "monthly"
      ? `https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=${MONTHLY_PLAN_ID}&return=${baseReturnUrl}`
      : `https://www.paypal.com/donate/?business=${PAYPAL_EMAIL}&currency_code=USD${
          amount ? `&amount=${amount}` : ""
        }&return=${baseReturnUrl}`;

  /* ================= SUCCESS VIEW ================= */
  if (success) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
        <div className="bg-white max-w-md w-full rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Thank You for Supporting the Ministry 🙏
          </h2>

          <p className="text-gray-600 mb-6">
            Your generosity helps spread hope, faith, and God’s Word around the world.
          </p>

          <button
            onClick={() => setOpen(false)}
            className="bg-blue-900 text-white px-8 py-3 rounded-xl font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  /* ================= DONATION VIEW ================= */
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white max-w-md w-full rounded-2xl p-8 relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 text-xl"
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          Support the Ministry
        </h2>

        {/* TYPE */}
        <div className="flex gap-2 mb-6">
          {["one", "monthly"].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`flex-1 py-2 rounded-lg font-medium border ${
                type === t
                  ? "bg-blue-900 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {t === "one" ? "One-Time" : "Monthly"}
            </button>
          ))}
        </div>

        {/* AMOUNTS */}
        {type === "one" && (
          <>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  onClick={() => setAmount(a)}
                  className={`py-2 rounded-lg border font-medium ${
                    amount == a
                      ? "bg-blue-50 border-blue-900"
                      : "bg-white"
                  }`}
                >
                  USD {a}
                </button>
              ))}
            </div>

            <input
              type="number"
              placeholder="Custom amount (USD)"
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
          className="block w-full bg-blue-900 text-white py-4 rounded-xl text-center font-semibold"
        >
          Donate via PayPal
        </a>

        <div className="text-center mt-4">
          <a
            href="mailto:klfministries7@gmail.com?subject=Request%20for%20Bank%20Details"
            className="text-blue-700 underline text-sm"
          >
            Request bank details
          </a>
        </div>
      </div>
    </div>
  );
}
