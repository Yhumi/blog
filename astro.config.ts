import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.miyei.me',
  output: 'static',
  integrations: [expressiveCode({
    themes: [spectreDark],
  }), mdx(), sitemap(), spectre({
    name: 'Yhumi',
    openGraph: {
      home: {
        title: 'Yhumi',
        description: 'Puppygirl, FFXIV raider, Chunithm addict, and software developer ♥'
      },
      blog: {
        title: 'Blog',
        description: 'Writing tidbits about my endeavours.'
      },
      projects: {
        title: 'Projects'
      }
    },
    giscus: {
      repository: 'yhumi/blog',
      repositoryId: 'R_kgDOOK9Gtw',
      category: 'General',
      categoryId: 'DIC_kwDOOK9Gt84CoNLq',
      mapping: 'pathname',
      strict: true,
      reactionsEnabled: true,
      emitMetadata: false,
      lang: 'en',
    }
  }), react(), markdoc(), keystatic()],
  // adapter: node({
  //   mode: 'standalone'
  // })
});