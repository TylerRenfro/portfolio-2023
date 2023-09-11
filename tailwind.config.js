module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './_research-artifacts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    fontFamily: {
      'sans': ['"Work Sans"'],
      'display': ['"Work Sans"'],
      'body': ['"Work Sans"']
    },
  },
  plugins: [require('@tailwindcss/typography'), require("daisyui"), require('tailwindcss'), require('autoprefixer')],
  daisyui: {
    themes: ['light', 'dark'],
    
  },
}