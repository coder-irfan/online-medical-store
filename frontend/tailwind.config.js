/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          light: "hsl(0, 0%, 95%)", // #F2F2F2
          lightBeige: "hsl(42, 21%, 92%)", // #EEEDE7
          lightBrown: "hsl(29, 27%, 33%)", // #6C543E
          darkBrown: "hsl(30, 52%, 20%)", // #503217
          warmGray: "hsl(30, 14%, 49%)", // #8F7D6A
          orangeBurnt: "hsl(20, 65%, 55%)", // #D3744A
          darkestBrown: "hsl(30, 50%, 5%)", // #160D05
          softGray: "hsl(45, 14%, 91%)", // #E2DFCF
          grayishColor: "hsl(51, 25, 85)", // #E2DFCF
          paleBeige: "hsl(45, 22%, 88%)", // #E8E6DE
          ivory: "hsl(45, 21%, 91%)", // #EBE9E0
          red: "hsl(0, 75%, 60%)", // #EF4444
          lightOrange: "hsl(18, 61%, 56%)", // #D3744A
          softBeigeYellow: "hsl(51, 25%, 85%)", //#E2DFCF
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
