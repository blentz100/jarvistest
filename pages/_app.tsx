// @ts-nocheck
// ^ type checking causes a bunch of issues in DefaultSeo, BE CAREFUL

import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import type { AppProps } from "next/app";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import * as config from "../lib/config";

import meJpg from "../public/static/images/me.jpg";
import faviconIco from "../public/static/images/favicon.ico";
import appleTouchIconPng from "../public/static/images/apple-touch-icon.png";

import "../styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // https://nextjs.org/docs/messages/next-script-for-ga
    // https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications#measure_virtual_pageviews
    const handlePageview = (url: string) => {
      if (typeof window.gtag === "function") {
        window.gtag("set", "page_path", url);
        window.gtag("event", "page_view");
      }
    };

    router.events.on("routeChangeComplete", handlePageview);
    return () => {
      router.events.off("routeChangeComplete", handlePageview);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo
        defaultTitle={`${config.siteName} – ${config.shortDescription}`}
        titleTemplate={`%s – ${config.siteName}`}
        description={config.longDescription}
        canonical={`${config.baseURL}/`}
        openGraph={{
          site_name: config.siteName,
          title: `${config.siteName} – ${config.shortDescription}`,
          url: `${config.baseURL}/`,
          locale: "en_US",
          type: "website",
          images: [
            {
              url: `${config.baseURL}${meJpg.src}`,
              alt: `${config.siteName} – ${config.shortDescription}`,
            },
          ],
        }}
        twitter={{
          handle: `@${config.twitterHandle}`,
          site: `@${config.twitterHandle}`,
          cardType: "summary",
        }}
        facebook={{
          appId: config.facebookAppId,
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: faviconIco.src,
          },
          {
            rel: "apple-touch-icon",
            href: appleTouchIconPng.src,
            sizes: `${appleTouchIconPng.width}x${appleTouchIconPng.height}`,
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
          {
            rel: "alternate",
            href: `/feed.xml`,
            type: "application/rss+xml",
            title: `${config.siteName} (RSS)`,
          },
          {
            rel: "alternate",
            href: `/feed.atom`,
            type: "application/atom+xml",
            title: `${config.siteName} (Atom)`,
          },
          {
            rel: "webmention",
            href: `https://webmention.io/${config.webmentionId}/webmention`,
          },
          {
            rel: "pingback",
            href: `https://webmention.io/${config.webmentionId}/xmlrpc`,
          },
          {
            rel: "humans",
            href: `/humans.txt`,
          },
          {
            rel: "pgpkey",
            href: `/pubkey.asc`,
            type: "application/pgp-keys",
          },
        ]}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
          {
            name: "author",
            content: config.authorName,
          },
          {
            name: "monetization",
            content: config.monetization,
          },
          {
            name: "twitter:dnt",
            content: "on",
          },
          {
            name: "twitter:widgets:csp",
            content: "on",
          },
        ]}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Jake Jarvis"
        url={`${config.baseURL}/`}
        sameAs={[
          `${config.baseURL}/`,
          "https://github.com/jakejarvis",
          "https://keybase.io/jakejarvis",
          "https://twitter.com/jakejarvis",
          "https://medium.com/@jakejarvis",
          "https://www.linkedin.com/in/jakejarvis/",
          "https://www.facebook.com/jakejarvis",
          "https://www.instagram.com/jakejarvis/",
          "https://mastodon.social/@jakejarvis",
        ]}
      />

      {/* Inline script to restore light/dark theme preference ASAP */}
      <Script id="restore_theme" strategy="afterInteractive">{`
try {
  var pref = localStorage.getItem("dark_mode"),
      dark = pref === "true" || (!pref && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
} catch (e) {}`}</Script>

      <Script src={`https://www.googletagmanager.com/gtag/js?id=UA-1563964-4`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-1563964-4', {
  anonymize_ip: true
});`}</Script>

      <Component {...pageProps} />
    </>
  );
}