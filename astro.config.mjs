import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdownConfig from './markdown.config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";
import playformCompress from "@playform/compress";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jaimedigitalstudio.com",
  prefetch: true,
  markdown: {
    ...markdownConfig
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), react(), mdx({
    ...markdownConfig,
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "one-dark-pro"
    }
  }), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), robotsTxt({
    sitemap: ['https://www.jaimedigitalstudio.com/sitemap-0.xml', 'http://www.www.jaimedigitalstudio.com/sitemap-index.xml']
  }), playformCompress(), db()]
  // output: "server",
  // adapter: vercel({
  //   webAnalytics: {
  //     enabled: true
  //   },
  //   speedInsights: {
  //     enabled: true
  //   },
  //   imageService: true
  // })
});