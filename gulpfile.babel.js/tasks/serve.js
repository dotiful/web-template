"use strict";

import { gulp, src, dest, task } from "gulp";
import browsersync from "browser-sync";

function serve(done) {
  browsersync.init({
    server: cfg.build.root,
    notify: true,
    ghostMode: false,
    open: true,
    port: 6969,
    ui: false,
    snippetOptions: {
      rule: {
        match: /<\/body>/i,
        fn: (snippet, match) => snippet + match,
      }
    },
  });

  done();
  // gulp.watch(paths.views.watch, gulp.parallel("html"));
  // gulp.watch(paths.styles.watch, gulp.parallel("styles"));
  // gulp.watch(paths.scripts.watch, gulp.parallel("scripts"));
  // gulp.watch(paths.sprites.watch, gulp.parallel("sprites"));
  // gulp.watch(paths.images.watch, gulp.parallel("images"));
  // gulp.watch(paths.webp.watch, gulp.parallel("webp"));
  // gulp.watch(paths.fonts.watch, gulp.parallel("fonts"));
};

serve.description = 'Boots up and runs Browser-sync server';
task(serve);
