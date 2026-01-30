import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte'],

  // Preprocessors
  preprocess: [vitePreprocess()],

  kit: {
    // Use Vercel adapter with Node 18 runtime
    adapter: adapter({
      runtime: 'nodejs18.x'
    })
  }
};

export default config;
