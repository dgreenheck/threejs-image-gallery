/**
* @type {import('vite').UserConfig}
*/
export default {
  // Set the base directory for GitHub pages
  base: process.env.NODE_ENV === 'production' ? '/threejs-image-gallery/' : '/',
  build: {
    outDir: './dist',
    sourcemap: true,
  },
  publicDir: './public',
}