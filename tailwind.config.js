/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-highest": "#e1e3e2",
        "on-secondary-fixed": "#151d17",
        "tertiary-fixed": "#fedada",
        "on-tertiary-fixed": "#2a1617",
        "on-surface": "#191c1c",
        "surface-container-lowest": "#ffffff",
        "secondary-container": "#d9e2d8",
        "error": "#ba1a1a",
        "inverse-on-surface": "#f0f1f0",
        "outline": "#737973",
        "tertiary": "#251213",
        "surface-container-high": "#e7e8e7",
        "on-error": "#ffffff",
        "primary": "#061b0e",
        "on-primary-fixed-variant": "#364c3c",
        "surface-bright": "#f9f9f8",
        "primary-container": "#1b3022",
        "surface-variant": "#e1e3e2",
        "error-container": "#ffdad6",
        "inverse-surface": "#2e3131",
        "on-surface-variant": "#434843",
        "tertiary-container": "#3c2627",
        "surface-container-low": "#f3f4f3",
        "on-secondary": "#ffffff",
        "background": "#f9f9f8",
        "on-error-container": "#93000a",
        "surface-dim": "#d9dad9",
        "on-background": "#191c1c",
        "secondary-fixed-dim": "#c0c9bf",
        "on-secondary-container": "#5c655d",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed-variant": "#404941",
        "surface-container": "#edeeed",
        "primary-fixed": "#d0e9d4",
        "secondary-fixed": "#dce5db",
        "primary-fixed-dim": "#b4cdb8",
        "secondary": "#586159",
        "on-primary": "#ffffff",
        "on-primary-container": "#819986",
        "outline-variant": "#c3c8c1",
        "on-primary-fixed": "#0b2013",
        "on-tertiary-fixed-variant": "#594041",
        "surface-tint": "#4d6453",
        "tertiary-fixed-dim": "#e1bebe",
        "inverse-primary": "#b4cdb8",
        "on-tertiary-container": "#ab8c8c",
        "surface": "#f9f9f8"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Chillax", "sans-serif"],
        "body": ["Synonym", "sans-serif"],
        "label": ["Synonym", "sans-serif"],
        "brand": ["Chillax", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

