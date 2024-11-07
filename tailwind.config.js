/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7920",
        secondary: "#A0A0A0",
        accent: "#ff3860",
        danger: "#e3342f",
        success: "#38c172",
        warning: "#f6993f",
        info: "#6cb2eb",
        neutral: "#3d4451",
      },
    },
    backgroundImage: {
      'splash0': 'url("/SplashImg/s1.png")',
      'splash1': 'url("/SplashImg/s2.png")',
      'splash2': 'url("/SplashImg/s3.png")',
      'splash3': 'url("/SplashImg/s4.png")',
      'splash4': 'url("/SplashImg/s5.png")',
    },
  },
  plugins: [],
};