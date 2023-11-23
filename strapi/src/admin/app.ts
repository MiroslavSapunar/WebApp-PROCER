import favicon from "./extensions/favicon.ico"
import MenuLogo from "./extensions/RGB_1080x1080px_ISO_FondoAzul.png"

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: MenuLogo,
    },
    // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ['es'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      light: {
        colors: {
          primary100: "#e4f3fc",
          primary200: "#28c3fa",
          primary500: "#0f46f5",
          primary600: "#003c82",
          primary700: "#1e2346",
          danger700: "#b72b1a",
        }
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },

  bootstrap(app) {
    console.log(app);
  },
};
