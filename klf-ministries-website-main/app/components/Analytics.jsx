"use client";

import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-RY05JQHSR1"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RY05JQHSR1');

          document.addEventListener('click', function(e) {
            const event = e.target.getAttribute('data-event');
            if (event) {
              gtag('event', event, {
                method: 'engagement'
              });
            }
          });
        `}
      </Script>
    </>
  );
}
