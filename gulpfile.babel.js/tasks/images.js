"use strict";

import { task, src, dest }       from "gulp";
import gulpif                    from "gulp-if";
import imagemin                  from "gulp-imagemin";
import imageminWebp              from "imagemin-webp";
import svgstore                  from "gulp-svgstore";
import rename                    from "gulp-rename";
import debug                     from "gulp-debug";
import browserSync               from "browser-sync";

const pluginsSvgo = [
  { removeViewBox: false },
  { removeTitle: true },
  { cleanupNumericValues: { floatPrecision: 1 } }
];

const pluginsImagemin = [
  imagemin.optipng(), // {optimizationLevel: 5}
  imagemin.svgo({ plugins: pluginsSvgo }),
  imagemin.mozjpeg({
    quality: 85,
  })
];

const pluginsWebp = [
  imageminWebp({ preset: 'picture' }),
  // lossless: false,    //false
  // quality: 90,        // 75
  // alphaQuality: 95,   // 100
];

function images() {
  return src(cfg.src.images.all)
    .pipe(imagemin(pluginsImagemin))
    .pipe(dest(cfg.build.images))
    .pipe(gulpif(cfg.debug, debug({title: 'images:'})))
    .on("end", browserSync.reload);
}

function webp() {
  return src(cfg.src.images.webp)
    .pipe(imagemin(pluginsWebp))
    .pipe(rename({
      extname: '.webp'
    }))
    .pipe(dest(cfg.build.images))
    .pipe(gulpif(cfg.debug, debug({title: 'webp:'})))
    .on("end", browserSync.reload);
}

function sprites() {
  return src(cfg.src.images.icons)
    .pipe(gulpif(cfg.debug, debug({title: 'svg-sprite:'})))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('svg-sprite.svg'))
    .pipe(dest(cfg.build.images))
    .on("end", browserSync.reload);
};

task(images);
images.description  = 'Minify png/jpeg/gif/svg images';

task(webp);
webp.description    = 'Convert images to webp';

task(sprites);
sprites.description = 'Combine svg files into one with <symbol> elements';
