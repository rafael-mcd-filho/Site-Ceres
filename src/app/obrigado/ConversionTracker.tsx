"use client";

import { useEffect, useRef } from "react";

/**
 * Dispara a conversão uma única vez. A página tem URL própria justamente para
 * que GTM e Ads possam marcar o evento sem depender de clique em botão.
 */
export function ConversionTracker({ area }: { area: string }) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const target = window as Window & { dataLayer?: Array<Record<string, string>> };
    target.dataLayer = target.dataLayer || [];
    target.dataLayer.push({ event: "form_conversion", area });
  }, [area]);

  return null;
}
