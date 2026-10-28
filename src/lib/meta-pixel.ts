// Meta Pixel loader. Blocked for visitors in regions that require prior consent (EEA/UK/CH),
// since this page has no consent banner. Unknown region => blocked.
const PIXEL_ID = "1512157364297708";
const CONSENT_REGIONS = new Set(
  "AT BE BG HR CY CZ DK EE FI FR DE GR HU IE IT LV LT LU MT NL PL PT RO SK SI ES SE IS LI NO GB CH".split(" "),
);

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: unknown;
  loaded?: boolean;
  version?: string;
};
declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

let allowed = false;

async function regionAllowed(): Promise<boolean> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 2000);
    const res = await fetch("/cdn-cgi/trace", { signal: ctrl.signal });
    clearTimeout(t);
    if (!res.ok) return false;
    const loc = /loc=([A-Z0-9]+)/.exec(await res.text())?.[1];
    if (!loc || loc === "XX" || loc === "T1") return false;
    return !CONSENT_REGIONS.has(loc);
  } catch {
    return false;
  }
}

function call(...args: unknown[]) {
  const f = window.fbq;
  if (!f) return;
  if (f.callMethod) f.callMethod.apply(f, args);
  else f.queue?.push(args);
}

export async function initMetaPixel() {
  if (typeof window === "undefined" || window.fbq) return;
  if (!(await regionAllowed())) return;
  allowed = true;
  const n = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod.apply(n, args);
    else n.queue!.push(args);
  } as Fbq;
  window.fbq = n;
  if (!window._fbq) window._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  call("init", PIXEL_ID, {}, { agent: "lovable" });
  call("track", "PageView");
}

export function trackInitiateCheckout() {
  if (!allowed) return;
  call("track", "InitiateCheckout", { value: 10, currency: "BRL" }, { eventID: crypto.randomUUID() });
}
