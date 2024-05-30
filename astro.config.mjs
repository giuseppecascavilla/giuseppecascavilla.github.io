import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: 'https://astrofy-template.netlify.app',
  site: 'https://giuseppecascavilla.github.io',
  integrations: [mdx(), sitemap({
    filter: (page) => 
      page !== 'https://giuseppecascavilla.github.io/store/' &&
      page !== 'https://giuseppecascavilla.github.io/store/item1/' &&
      page !== 'https://giuseppecascavilla.github.io/store/item2/' &&
      page !== 'https://giuseppecascavilla.github.io/store/item3/' &&
      page !== 'https://giuseppecascavilla.github.io/store/item4/' &&
      page !== 'https://giuseppecascavilla.github.io/store/item5/' &&
      page !== 'https://giuseppecascavilla.github.io/store/item6/' &&
      page !== 'https://giuseppecascavilla.github.io/store/item7/' &&
      page !== 'https://giuseppecascavilla.github.io/store/item8/',
  }), tailwind()]

});