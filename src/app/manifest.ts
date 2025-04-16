import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fraværskalkulator VGS',
    short_name: 'Fraværskalkulator',
    description: "Fraværskalkulator for elever i hele den Norske videregående skole. Laget av elever for elever.",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      }
    ],
  }
}