import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary_d: "#0f46f5",
      primary_l: "#28c3fa",
      alter_d: "#1e2346",
      alter_l: "#003c82",
      medium_tone_d: "#c3c5c9",
      medium_tone_l: "#e4f3fc",
      transparent: "#00000000",
      white: "#ffffffff",
      Croma_Principal_Oscuro: "#0f46f5",
      Croma_Principal_Claro: "#28c3fa",
      Croma_Secundario_Oscuro: "#1e2346",
      Croma_Secundario_Claro: "#c3c5c9",
      Medio_Tono_Oscuro: "#c3c5c9",
      Medio_Tono_Claro: "#e4f3fc",
      Blanco: "#ffffffff",
      Negro: "000000",
      Transparente: "#00000000",
    },
    fontFamily: {
      'display': ['Open Sans Extrabold'],
      'body': ['Open Sans'],
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(Croma_Principal_Oscuro|Croma_Principal_Claro|Croma_Secundario_Oscuro|Croma_Secundario_Claro|Medio_Tono_Oscuro|Medio_Tono_Claro|Blanco|Negro|Transparente)/,
    },
    {
      pattern: /text-(Croma_Principal_Oscuro|Croma_Principal_Claro|Croma_Secundario_Oscuro|Croma_Secundario_Claro|Medio_Tono_Oscuro|Medio_Tono_Claro|Blanco|Negro|Transparente)/,
    },
  ],
  variants: {
    display: ["group-hover"]
  },
}
export default config
