"use strict";

import gulp, { task, parallel, series } from "gulp";
import path                             from "path";
import del                              from "del";
import fs                               from "fs";

async function cleaning(file) {
  const config = {
    force: true,
  };

  const fileSrc = path.relative(path.resolve(cfg.src.root), file);
  const fileToDel = `${cfg.build.root}/${fileSrc}`;

  await del(fileToDel, config);

  const webp = fileToDel.includes('/img/content');
  if (webp) {
    const parsedPath = path.parse(fileToDel);
    const fileToDelWebp = `${path.join(parsedPath.dir, parsedPath.name)}.webp`;

    if (fs.existsSync(fileToDelWebp)) {
      await del(fileToDelWebp, config);
    }
  }
}

function watch() {
  gulp.watch(cfg.watch.html)
    .on('unlink', (file) => cleaning(file))
    .on('add', series("html"));

  gulp.watch(cfg.watch.styles,      parallel("styles"));
  gulp.watch(cfg.watch.scripts,     parallel("scripts"));

  gulp.watch(cfg.src.images.all)
    .on('unlink', (file) => cleaning(file))
    .on('add', series("images"));

  gulp.watch(cfg.src.images.webp, series("webp"));
  gulp.watch(cfg.src.images.icons,  parallel("sprites"));

  gulp.watch(cfg.src.fonts)
    .on('unlink', (file) => cleaning(file))
    .on('add', series("fonts"));
};

watch.description = 'Watch for changes, rebuild and reload the server';
task(watch);
