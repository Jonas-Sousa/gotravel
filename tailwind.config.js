/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    backgroundImage: {
      'card': "url('/assets/images/rjteste.jpg')",
    }
  },
  fontSize: {
    sm: '1rem',
    md: '2rem',
    xl: '4rem',
  }
};
export const plugins = [];

