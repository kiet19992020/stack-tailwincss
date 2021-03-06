const { rem, lineHeight } = require('../utils')
const fontSize = {
  xs: ['0.875rem', { lineHeight: '1' }],
  sm: ['0.9375rem', { lineHeight: '1.25' }],
  base: ['1rem', { lineHeight: '1.44' }],
  lg: ['1.125rem', { lineHeight: '1.75' }],
  xl: ['1.25rem', { lineHeight: '1.75' }],
  '2xl': ['1.5rem', { lineHeight: '2' }],
  '3xl': ['1.875rem', { lineHeight: '2.25' }],
  '4xl': ['2.25rem', { lineHeight: '2.5' }],
  '5xl': ['3rem', { lineHeight: '1' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
  '7xl': ['4.5rem', { lineHeight: '1' }],
  '8xl': ['6rem', { lineHeight: '1' }],
  '9xl': ['8rem', { lineHeight: '1' }],
  'h1': ['1.875rem', { lineHeight: '1.13333'}],
  'h2': ['1.375rem', { lineHeight: '1.45' }],
  'h3': ['1.125rem', { lineHeight: '1.45' }],
  'h4': ['1.125rem', { lineHeight: '1.3' }],
  'h5': ['0.875rem', { lineHeight: 'normal' }],
  'h6': ['0.875rem', { lineHeight: 'normal' }],
  'h1-md': ['3.125rem', { lineHeight: '1.04' }],
  'h2-md': ['1.75rem', { lineHeight: '1.32' }],
  'h3-md': ['1.75rem', { lineHeight: '1.32' }],
  'h4-md': ['1.5rem', { lineHeight: '1.32' }],
  'h5-md': ['1.75rem', { lineHeight: '1.32' }],
  'h6-md': ['1.5rem', { lineHeight: '1.42' }],
  'btn': ['.875em', { lineHeight: '1.2' }]

}
module.exports = {
  fontSize
}
