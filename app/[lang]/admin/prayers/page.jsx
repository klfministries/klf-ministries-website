"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabaseClient";

export default function AdminPrayers() {
  const router = useRouter();
  const supabase = getSupabaseClient();

  const [prayers, setPrayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    fetchPrayers();
  }, []);

  async function checkAuth() {
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      router.push("/login");
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

  if (loading) return <p className="p-6">Loading prayers...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Prayer Requests (Admin)
      </h1>

      {prayers.length === 0 && <p>No prayer requests yet.</p>}

      {prayers.map((p) => (
        <div key={p.id} className="border rounded p-4 mb-4">
          <p className="font-semibold">
            {p.name || "Anonymous"}
          </p>

          <p className="mt-2">{p.message}</p>

          <p className="text-sm text-gray-500 mt-2">
            Status: {p.approved ? "Approved" : "Pending"}
          </p>

          <div className="mt-3 space-x-4">
            {!p.approved && (
              <button
                onClick={() => approvePrayer(p.id)}
                className="text-green-600 font-medium"
              >
                Approve
              </button>
            )}

            <button
              onClick={() => deletePrayer(p.id)}
              className="text-red-600 font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
