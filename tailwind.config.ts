import type { Config } from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        fontFamily:{
            'display':['Dela Gothic One','ui-sans-serif', 'system-ui'],
            'sans': ['IBM Plex Sans','ui-sans-serif', 'system-ui'],
            'serif': ['IBM Plex Sans','ui-serif', 'Georgia'],
            'mono': ['IBM Plex Sans','ui-monospace', 'SFMono-Regular'],
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },

            colors: {
                'green': {
                    '50': '#f1fce9',
                    '100': '#e0f8cf',
                    '200': '#c3f1a5',
                    '300': '#9ce670',
                    '400': '#84da53',
                    '500': '#5abc26',
                    '600': '#43961a',
                    '700': '#347318',
                    '800': '#2d5b19',
                    '900': '#284e19',
                    '950': '#112a09',
                },
                'violet': {
                    '50': '#f3f2ff',
                    '100': '#ebe7ff',
                    '200': '#d9d3ff',
                    '300': '#bcafff',
                    '400': '#9c82ff',
                    '500': '#7d4fff',
                    '600': '#7130fc',
                    '700': '#6019e8',
                    '800': '#4f15c2',
                    '900': '#43139f',
                    '950': '#27096c',
                },
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config