/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulpfile.js/tasks. Any files in that directory get
  automatically required below.
*/

// https://github.com/justcoded/web-starter-kit/blob/master/tasks/copy-files.js

"use strict";

import { gulp, series, parallel } from "gulp";
import requireDir                 from "require-dir";

global.cfg = require("./config.js");

requireDir("./tasks/");


// development.description = 'Development env task';


// export const build = series("clean",
export const build = series(
  parallel(["html", "styles", "scripts", "images", "webp", "sprites", "fonts", "video"]),
  parallel(["serve", "watch"]));

build.flags = {
  '--prod': 'Builds in production mode (minification, etc).'
};

// export const build = gulp.series("clean",
//   gulp.parallel(["html", "styles", "scripts", "images", "webp", "sprites", "fonts", "video"]),
//   gulp.parallel("serve"));

// export const prod = gulp.series("clean",
//   gulp.series(["html", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons"]));

export default build;
