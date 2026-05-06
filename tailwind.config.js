const { colors } = require('./src/styles/colors');
const { fontSize } = require('./src/styles/fontsize');
const { spacing } = require('./src/styles/spacing');
const { radius } = require('./src/styles/radius');
// @ts-ignore
const nativewindPreset = require('nativewind/preset');

/** @type {import('tailwindcss').Config} */
const config = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [nativewindPreset],
  theme: {
    extend: {
      colors,
      fontSize,
      spacing,
      radius,
    },
  },
  plugins: [],
};

module.exports = config;
