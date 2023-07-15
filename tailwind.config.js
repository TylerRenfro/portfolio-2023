module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
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
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light', 'dark'],
    
  },
}