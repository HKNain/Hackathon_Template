// tailwind.config.js
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
   safelist: [
    {
      pattern: /rotate-\[\d+deg\]/,
    },
    {
      pattern: /z-\[\d+\]/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        bitcount: ['"Bitcount Grid Double"', 'monospace'], // use quotes for font with spaces
        bari:['"Barriecito"','monospace'],
        Comic :['"Comic Relief"','monospace'],
        Sour :['"Sour Gummy"','monospace']
      },
    },
  },
  plugins: [],
};
