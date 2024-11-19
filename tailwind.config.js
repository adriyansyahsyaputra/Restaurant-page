/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["login.html", "register.html", "menu.html", "cart.html", "index.html", "register.html", "productDetail.html", "contact.html", "about.html"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

