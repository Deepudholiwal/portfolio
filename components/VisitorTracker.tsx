"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
  useEffect(() => {
    fetch("/api/visitor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: window.location.pathname,
        referrer: document.referrer || "direct",
        userAgent: navigator.userAgent
      })
    }).catch(() => {
      // Tracking is non-blocking
    });
  }, []);

  return null;
}
