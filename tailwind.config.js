/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
function rem2px(input, fontSize = 16) {
  if (input == null) {
    return input;
  }
  switch (typeof input) {
    case "object":
      if (Array.isArray(input)) {
        return input.map((val) => rem2px(val, fontSize));
      } else {
        const ret = {};
        for (const key in input) {
          ret[key] = rem2px(input[key]);
        }
        return ret;
      }
    case "string":
      return input.replace(
        /(\d*\.?\d+)rem$/,
        (_, val) => parseFloat(val) * fontSize + "px"
      );
    default:
      return input;
  }
}
module.exports = {
  darkMode: ["class"],
  content: [
    "./entrypoints/**/*.{html,ts,tsx}",
    "./components/**/*.{html,ts,tsx}",
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
    fontSize: {
        'scale-sm': '0.8rem', // Base for small
        'scale-md': '1rem',   // Base for medium
        'scale-lg': '1.2rem', // Base for large
        'scale-xl': '1.4rem', // Base for extra large
    },
    extend: {
      fontSize: {
        xs: "calc(var(--base-font-size, 16px) * 0.75)",
        sm: "calc(var(--base-font-size, 16px) * 0.875)",
        base: "var(--base-font-size, 16px)",
        lg: "calc(var(--base-font-size, 16px) * 1.125)",
        xl: "calc(var(--base-font-size, 16px) * 1.25)",
        "2xl": "calc(var(--base-font-size, 16px) * 1.5)",
        "3xl": "calc(var(--base-font-size, 16px) * 1.875)",
        "4xl": "calc(var(--base-font-size, 16px) * 2.25)",
        "5xl": "calc(var(--base-font-size, 16px) * 3)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
      typography: {
        DEFAULT: {
          css: {
            fontSize: 'var(--base-font-size, 16px)',
            h1: {
              fontSize: 'calc(var(--base-font-size, 16px) * 2.25)',
            },
            h2: {
              fontSize: 'calc(var(--base-font-size, 16px) * 1.875)',
            },
            h3: {
              fontSize: 'calc(var(--base-font-size, 16px) * 1.5)',
            },
            h4: {
              fontSize: 'calc(var(--base-font-size, 16px) * 1.25)',
            },
            h5: {
              fontSize: 'calc(var(--base-font-size, 16px) * 1.125)',
            },
            h6: {
              fontSize: 'var(--base-font-size, 16px)',
            },
            'code, pre': {
              fontSize: 'calc(var(--base-font-size, 16px) * 0.875)',
            },
            a: {
              color: 'hsl(var(--primary))',
            },
            'ul > li::marker': {
              color: 'hsl(var(--muted-foreground))',
            },
            'ol > li::marker': {
              color: 'hsl(var(--muted-foreground))',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
