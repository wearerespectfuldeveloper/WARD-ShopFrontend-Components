module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/global_style.scss";
          @import "@/assets/scss/typography/font-face.scss";
          @import "@/assets/scss/typography/typography-0+.scss";
          @import "@/assets/scss/typography/typography-600+.scss";
          @import "@/assets/scss/typography/typography-900+.scss";
          @import "@/assets/scss/typography/typography-1200+.scss";
          @import "@/assets/scss/utilities/colors.scss";
          @import "@/assets/scss/utilities/elevations.scss";
          @import "@/assets/scss/utilities/grids.scss";
          @import "@/assets/scss/utilities/borders.scss";

        `
      }
    }
  }
};