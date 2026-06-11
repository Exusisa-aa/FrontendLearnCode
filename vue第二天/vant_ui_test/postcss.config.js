export default {
  plugins: {
    'postcss-px-to-viewport': {
      //设计图为750，一倍图为375
      //设计图为640，一倍图为320
      viewportWidth: 375
    },
  },
};