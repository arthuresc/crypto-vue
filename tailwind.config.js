/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 row grid
        '16': 'repeat(16, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
      },
      gridRowEnd: {
        '14':'14',
        '15':'15',
        '16':'16',
        '17':'17'
      },
      screens: {
        'mobile': '640px',
  
        'desktop': '1024px',
      }
    }
  },
  plugins: [],
}

