"use client";

import { useEffect, useState } from "react";
import { getSupabaseClient } from "@/lib/supabaseClient";

export default function AdminPrayers() {
  const supabase = getSupabaseClient();

  const [prayers, setPrayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    fetchPrayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function checkAuth() {
    const { data } = await supabase.auth.getUser();

    if (
      !data.user ||
      data.user.email !== "klfministries7@gmail.com"
    ) {
      await supabase.auth.signOut();
      window.location.href = "/en/login";
    }
  }

  async function fetchPrayers() {
    const { data, error } = await supabase
      .from("prayer_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setPrayers(data || []);
    setLoading(false);
  }

  async function approvePrayer(id) {
    await supabase
      .from("prayer_requests")
      .update({ approved: true })
      .eq("id", id);

    fetchPrayers();
  }

  async function deletePrayer(id) {
    if (!confirm("Delete this prayer request?")) return;

    await supabase
      .from("prayer_requests")
      .delete()
      .eq("id", id);

    fetchPrayers();
  }

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading prayer requests...
      </div>
    );
  }

  return (
    <div
      className="
        relative
        z-50
        pointer-events-auto
        p-6
        max-w-3xl
        mx-auto
        bg-white
      "
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Prayer Requests (Admin)
        </h1>

        {/* LOGOUT LINK — NOW CLICKABLE */}
        <a
          href="/en/logout"
          className="text-sm text-blue-600 underline cursor-pointer"
        >
          Log out
        </a>
      </div>

      {prayers.length === 0 && (
        <p className="text-center text-gray-600">
          No prayer requests yet.
        </p>
      )}

      {prayers.map((p) => (
        <div
          key={p.id}
          className="border rounded p-4 mb-4 bg-white shadow-sm"
        >
          <p className="font-semibold">
            {p.name || "Anonymous"}
          </p>

          <p className="mt-2">{p.message}</p>

          <p className="text-sm text-gray-500 mt-2">
            Status:{" "}
            <span
              className={
                p.approved
                  ? "text-green-600 font-medium"
                  : "text-orange-600 font-medium"
              }
            >
              {p.approved ? "Approved" : "Pending"}
            </span>
          </p>

          <div className="mt-4 flex gap-4">
            {!p.approved && (
              <button
                onClick={() => approvePrayer(p.id)}
                className="px-4 py-1 rounded bg-green-600 text-white"
              >
                Approve
              </button>
            )}

            <button
              onClick={() => deletePrayer(p.id)}
              className="px-4 py-1 rounded bg-red-600 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
