"use strict";

import { gulp, task } from "gulp";
import del            from "del";

function clean() {
  return del(`${cfg.build.root}/*`);
}

clean.description = 'Removes the destination folder';
task(clean);
