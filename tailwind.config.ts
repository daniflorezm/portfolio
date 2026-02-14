import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#0f172a',
        bgDarker: '#020617',
        cyan: '#06b6d4',
        cyanLight: '#22d3ee',
        textMain: '#f1f5f9',
        textSecondary: '#94a3b8',
        border: '#1e293b',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
