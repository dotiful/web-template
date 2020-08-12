import yargs from "yargs";
// const argv = yargs.argv;

const dirs = {
  src: './source',
  dest: './build'
};

module.exports = {
  src: {
    root: dirs.src,
    html: `${dirs.src}/*.html`,
    styles: `${dirs.src}/styles/style.scss`,
    scripts: `${dirs.src}/js/**/*.js`,
    images: {
      all: [
        `${dirs.src}/img/**/*.{jpg,jpeg,png,gif,tiff,svg}`,
        // `!${dirs.src}/img/favicon/*.{jpg,jpeg,png,gif,tiff}`,
        `!${dirs.src}/img/sprite/*.{jpg,png,svg}`,
      ],
      icons: `${dirs.src}/img/sprite/**/*.svg`,
      webp: [
        `${dirs.src}/img/**/*.{jpg,jpeg,png,tiff}`,
        `!${dirs.src}/img/favicons/*.{jpg,jpeg,png,gif,tiff}`,
        `!${dirs.src}/img/sprite/*.{jpg,png,svg}`,
      ],
      content:  `${dirs.src}/img/content/`,
      favicon:  `${dirs.src}/img/favicons/favicon.png`,
      favicons: `${dirs.src}/img/favicons/`,
    },
    fonts: `${dirs.src}/fonts/`,
    video: `${dirs.src}/video/*mp4`,
  },
  build: {
    root: dirs.dest,
    styles: `${dirs.dest}/css`,
    scripts: `${dirs.dest}/js`,
    images: `${dirs.dest}/img/`,
    favicons: `${dirs.dest}/img/favicons`,
    fonts: `${dirs.dest}/fonts`,
    video: `${dirs.dest}/video`,
  },
  watch: {
    html: `${dirs.src}/*.html`,
    styles: `${dirs.src}/styles/**/*.scss`,
    scripts: `${dirs.src}/js/**/*.js`,
  },
  isDev: !yargs.argv.prod,
  isProd: !!yargs.argv.prod,
  debug: false,

  // isProduction() {
  //   return process.argv[process.argv.length - 1] === 'prod';
  // },
  // isDev: process.env.NODE_ENV === 'production',

  // isProduction() {
  //   return process.argv[process.argv.length - 1] === this.task.build;
  // },

  // html: {
  //   src: [
  //     "./source/*.html"
  //   ],
  //   dist: "./build/",
  //   watch: [
  //     "./source/*.html"
  //   ]
  // },
  // styles: {
  //   src: "./source/styles/style.scss",
  //   dist: "./build/css/",
  //   watch: [
  //     "./source/styles/**/*.scss"
  //   ]
  // },
  // scripts: {
  //   src: "./source/js/**/*.js",
  //   dist: "./build/js/",
  //   watch: [
  //     "./source/js/**/*.js"
  //   ]
  // },
  // images: {
  //   src: [
  //     "./source/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
  //     "!./source/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
  //     "!./source/img/icons/*.{jpg,png,svg}"
  //   ],
  //   dist: "./build/img/",
  //   watch: "./source/img/**/*.{jpg,jpeg,png,gif,svg,tiff}"
  // },
  // webp: {
  //   src: [
  //     "./source/img/**/*.{jpg,jpeg,png,tiff}",
  //     "!./source/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
  //   ],
  //   dist: "./build/img/",
  //   watch: [
  //     "./source/img/**/*.{jpg,jpeg,png,tiff}",
  //     "!./source/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
  //   ]
  // },
  // sprites: {
  //   src: "./source/img/icons/*.svg",
  //   dist: "./build/img/",
  //   watch: "./source/img/icons/*.svg"
  // },
  // fonts: {
  //   src: "./source/fonts/**/*.{woff,woff2}",
  //   dist: "./build/fonts/",
  //   watch: "./source/fonts/**/*.{woff,woff2}"
  // },
  // favicons: {
  //   src: "./source/img/favicon/*.{jpg,jpeg,png,gif}",
  //   dist: "./build/img/favicons/",
  // },
  // video: {
  //   src: "./source/video/*mp4",
  //   dist: "./build/video"
  // }
};
