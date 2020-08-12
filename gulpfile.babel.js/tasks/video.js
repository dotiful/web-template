'use strict';

import { task, src, dest } from "gulp";
import gulpif              from "gulp-if";
import debug               from "gulp-debug";

function video() {
  return src(cfg.src.video)
    .pipe(dest(cfg.build.video))
    // .pipe(gulpif(cfg.debug,  debug({
    //   title: "Video",
    //   showFiles: false
    // })));
}

video.description = 'Copy video files';
task(video);
