/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Primary
        primary: " #3B82F6", // Main action buttons
        //  (e.g., "Add Item", "Save"), active states, icons
        secondary: " #60A5FA", // Secondary buttons
        //  (e.g., "Cancel"), links (e.g., "Sign Up" on SignInScreen), hover effects

        // Neutrals
        white: " #FFFFFF", // Main app background,
        // item cards, input field backgrounds
        lightGray: " #F3F4F6", // Screen backgrounds,
        // separators, subtle borders
        mediumGray: " #6B7280", // Secondary text
        // (e.g., item descriptions, quantities), inactive states, borders
        ash: "#374151", // Primary text (e.g., item names, headings),
        // titles, strong emphasis

        // Accents
        success: " #10B981", // Success feedback (e.g., "Item added" toast),
        //  checkmark icons
        error: " #EF4444", // Error messages (e.g., invalid input),
        //  delete buttons, alerts

        // Dark Mode (optional)
        darkBackground: " #1F2937", // App background in dark mode
        darkText: " #D1D5DB", // Readable text on dark backgrounds
        //  in dark mode
      },
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        rBold: ["Rubik-Bold", "sans-serif"],
        rExtrabold: ["Rubik-ExtraBold", "sans-serif"],
        rMedium: ["Rubik-Medium", "sans-serif"],
        rSemibold: ["Rubik-SemiBold", "sans-serif"],
        rLight: ["Rubik-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/*
Theme Colors
Primary Colors
Primary Blue: Used for buttons, active states, and key actions (e.g., "Add Item", "Save").
Hex: #3B82F6 (A vibrant, modern blue from Tailwind’s blue-500).
Usage: Primary buttons, icons, and highlights.
Secondary Blue: A softer blue for subtle accents or hover states.
Hex: #60A5FA (Tailwind’s blue-400).
Usage: Secondary buttons, links (e.g., "Sign Up" on SignInScreen).
Neutral Colors
White: Backgrounds and base color for cards.
Hex: #FFFFFF (Pure white).
Usage: Main app background, item cards, input fields.
Light Gray: Subtle backgrounds or borders.
Hex: #F3F4F6 (Tailwind’s gray-100).
Usage: Screen backgrounds, separators.
Medium Gray: Text and inactive states.
Hex: #6B7280 (Tailwind’s gray-500).
Usage: Secondary text (e.g., item descriptions), borders.
Ash (Dark Gray): Stronger contrast for headings or emphasis.
Hex: #374151 (Tailwind’s gray-700).
Usage: Primary text (e.g., item names), titles.
Accent Colors
Success Green: Feedback for successful actions (e.g., item added).
Hex: #10B981 (Tailwind’s green-500).
Usage: Success toasts, icons.
Error Red: Alerts or error states (e.g., invalid input).
Hex: #EF4444 (Tailwind’s red-500).
Usage: Error messages, delete buttons.
Dark Mode (Optional)
Dark Background: If you want to support dark mode later.
Hex: #1F2937 (Tailwind’s gray-800).
Usage: App background in dark mode.
Dark Text: Readable text on dark backgrounds.
Hex: #D1D5DB (Tailwind’s gray-300).
*/
