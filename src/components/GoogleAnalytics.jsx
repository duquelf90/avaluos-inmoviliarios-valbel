"use client";

import { useEffect } from "react";
import { initializeGA } from "@/utils/GoogleAnalytics";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGA();
      window.GA_INITIALIZED = true;
    }
  }, []);
}