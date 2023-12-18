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
      Croma_Principal_Oscuro: "#0f46f5",
      Croma_Principal_Claro: "#28c3fa",
      Croma_Secundario_Oscuro: "#1e2346",
      Croma_Secundario_Claro: "#c3c5c9",
      Medio_Tono_Oscuro: "#c3c5c9",
      Medio_Tono_Claro: "#e4f3fc",
      Blanco: "#ffffff",
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
