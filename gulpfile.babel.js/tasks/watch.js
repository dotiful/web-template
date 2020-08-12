"use strict";

import gulp                       from "gulp";
import { task, parallel, series } from "gulp";

function watch() {
  gulp.watch(cfg.watch.html,        parallel("html"));
  gulp.watch(cfg.watch.styles,      parallel("styles"));
  gulp.watch(cfg.watch.scripts,     parallel("scripts"));

  gulp.watch(cfg.src.images.all,    parallel("images"));
  gulp.watch(cfg.src.images.icons,  parallel("sprites"));
  gulp.watch(cfg.src.images.webp,   parallel("webp"));

  gulp.watch(cfg.src.fonts,         parallel("fonts"));
};

watch.description = 'Watch for changes, rebuild and reload the server';
task(watch);
