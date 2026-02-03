/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wa-header-bg': '#f0f2f5',
        'wa-chat-bg': '#efeae2',
        'wa-sidebar-hover': '#f5f6f6',
        'wa-sent-bubble': '#d9fdd3',
        'wa-received-bubble': '#ffffff',
        'wa-active-chat': '#ebebeb',
        'wa-green': '#00a884',
        'wa-text-primary': '#111b21',
        'wa-text-secondary': '#667781',
        'wa-search-bg': '#f0f2f5',
      }
    },
  },
  plugins: [],
}
