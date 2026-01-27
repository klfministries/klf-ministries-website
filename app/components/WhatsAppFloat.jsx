"use client";

import { useState, useEffect } from "react";

export default function WhatsAppFloat() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      setHide(e.detail === true);
    };

    window.addEventListener("bundle:toggle", handler);
    return () => window.removeEventListener("bundle:toggle", handler);
  }, []);

  if (hide) return null;

  return (
    <a
      href="https://wa.me/18768700508"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition z-10"
    >
      WhatsApp
    </a>
  );
}
