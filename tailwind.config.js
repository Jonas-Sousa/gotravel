/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    maxHeight: {
      '128': '28rem',
    },
    spacing: {
      '110': '30rem',
      '128': '38.5rem'
    },
    backgroundPosition: {
      "center-4": 'top center 10rem',

    }
  },
  fontSize: {
    sm: '1rem',
    md: '1.5rem',
    xl: '4rem',
    '2xl': '2.563rem',
    '3xl': '1.953rem',
    '4xl': '2.441rem',
    '5xl': '3.052rem',
  }
};
export const plugins = [];

