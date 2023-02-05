module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  //.....................................................
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2874f0",
          secondary: "#429bfe",
          accent: "#37cdbe",
    
          
        },
      },
      "dark",
      "cupcake",
    ],
    //....................................................
  },
  plugins: [require("daisyui")],
}
