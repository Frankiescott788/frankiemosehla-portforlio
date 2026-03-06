"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const CAL_EMBED_SCRIPT = `
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "20min", {origin:"https://app.cal.com"});
Cal.ns["20min"]("inline", {
  elementOrSelector:"#my-cal-inline-20min",
  config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"},
  calLink: "frankie-mosehla-meg3wy/20min",
});
Cal.ns["20min"]("ui", {"hideEventTypeDetails":true,"layout":"month_view"});
`;

const DEFAULT_CONTACT_EMAIL = "frankiemosehla@gmail.com";

export function GetStartedSection() {
  const scriptInjected = useRef(false);

  const email =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;

  useEffect(() => {
    if (scriptInjected.current) return;
    scriptInjected.current = true;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = CAL_EMBED_SCRIPT;
    document.body.appendChild(script);
    return () => {
      script.remove();
      scriptInjected.current = false;
    };
  }, []);

  return (
    <section id="book" className="py-16 md:py-24">
      <div className="mx-auto flex max-w-[920px] flex-col items-center text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#090a0d] shadow-[0_6px_12px_-8px_rgba(16,24,40,0.35)] dark:bg-white">
            <Image
              src="/icons/logo.svg"
              alt="Logo"
              width={26}
              height={26}
              className="h-6 w-6 object-contain invert dark:invert-0"
              priority={false}
            />
          </span>
          <span className="font-sans text-sm font-medium text-[#545961] dark:text-[#a6a9ae]" aria-hidden>
            x
          </span>
          <span className="relative h-10 w-10 overflow-hidden rounded-[14px] border border-dashed border-[#d6d8da] bg-white shadow-[0_6px_12px_-8px_rgba(16,24,40,0.22)] dark:border-[#272c37] dark:bg-[#181c24]">
            <Image
              src="/images/frankie.png"
              alt="Frankie"
              fill
              className="object-cover object-center"
              sizes="40px"
            />
          </span>
        </div>

        <h2 className="mt-6 font-sans text-4xl font-bold tracking-tight text-[#090a0d] dark:text-white md:text-5xl">
          Let&apos;s get started today.
        </h2>
        <p className="mt-3 max-w-xl font-sans text-sm leading-6 text-[#545961] dark:text-[#a6a9ae]">
          Book a call today or email me via{" "}
          <a
            href={`mailto:${email}`}
            className="font-medium text-[#090a0d] underline-offset-4 hover:underline dark:text-white"
          >
            {email}
          </a>
          .
        </p>

        <p className="mt-10 flex items-center justify-center gap-2 font-sans text-xs font-medium uppercase tracking-wide text-[#545961] dark:text-[#a6a9ae]">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-[#545961] dark:bg-[#a6a9ae]"
            aria-hidden
          />
          Schedule a 20-minute call below:
        </p>

        <div className="mx-auto mt-4 w-full max-w-[520px] overflow-hidden rounded-2xl border border-dashed border-[#d6d8da] bg-white font-sans shadow-[0_5px_8px_-4px_rgba(16,24,40,0.12)] dark:border-[#272c37] dark:bg-[#090a0d]">
          <div
            id="my-cal-inline-20min"
            className="min-h-[420px] w-full overflow-auto"
          />
        </div>
      </div>
    </section>
  );
}

