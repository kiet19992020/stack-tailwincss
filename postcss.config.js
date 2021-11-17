
const path = require('path')

module.exports = {
  plugins: {
    'postcss-extract-media-query': {
      output: {
        path: path.join(__dirname, '/public/assets/styles/')
      },
      queries: {
        '(min-width: 768px)': 'desktop',
        '(min-width: 992px)': 'desktop',
        '(min-width: 1200px)': 'desktop',
        '(min-width: 1440px)': 'desktop',
        '(min-width: 1500px)': 'desktop',
        '(min-width: 1700px)': 'desktop',
        '(min-width: 2000px)': 'desktop'
        // '(max-width: 1199px)': 'mobile',
        // '(max-width: 991px)': 'mobile',
        // '(max-width: 767px)': 'mobile',
        // '(max-width: 480px)': 'mobile',
        // '(max-width: 374px)': 'mobile'
      },
      extractAll: false
    }
  }
}
