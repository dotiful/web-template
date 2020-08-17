"use strict";

import { task, src, dest } from "gulp";
import realFavicon         from "gulp-real-favicon";
import imagemin            from "gulp-imagemin";
import gulpif              from "gulp-if";
import changed             from "gulp-changed";
import debug               from "gulp-debug";
import fs                  from "fs";

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

const FAVICON_DATA_FILE = `${cfg.src.images.favicons.root}/faviconData.json`;

function favicons() {
  return src(cfg.src.images.favicons.all)
    .pipe(changed(cfg.build.favicons))
    .pipe(imagemin(pluginsImagemin))
    .pipe(dest(cfg.build.favicons))
    .pipe(gulpif(cfg.debug, debug({title: 'favicons:'})));
}

favicons.description = 'Copy favicons to the destination folder';
task(favicons);

function faviconsGenerate(done) {
  realFavicon.generateFavicon({
    masterPicture: cfg.src.images.favicons.master,
    dest: cfg.src.images.favicons.root,
    iconsPath: './img/favicons/',
    design: {
      ios: {
        pictureAspect: 'noChange',
        assets: {
          ios6AndPriorIcons: false,
          ios7AndLaterIcons: false,
          precomposedIcons: false,
          declareOnlyDefaultIcon: true
        }
      },
      desktopBrowser: {
        design: 'raw'
      },
      windows: {
        pictureAspect: 'noChange',
        backgroundColor: '#da532c',
        onConflict: 'override',
        assets: {
          windows80Ie10Tile: false,
          windows10Ie11EdgeTiles: {
            small: false,
            medium: true,
            big: false,
            rectangle: false
          }
        }
      },
      androidChrome: {
        pictureAspect: 'noChange',
        themeColor: '#ffffff',
        manifest: {
          display: 'standalone',
          orientation: 'notSet',
          onConflict: 'override',
          declared: true
        },
        assets: {
          legacyIcon: false,
          lowResolutionIcons: false
        }
      },
      safariPinnedTab: {
        pictureAspect: 'blackAndWhite',
        threshold: 33.59375,
        themeColor: '#5bbad5'
      }
    },
    settings: {
      scalingAlgorithm: 'Mitchell',
      errorOnImageTooSmall: false,
      readmeFile: false,
      htmlCodeFile: false,
      usePathAsIs: false
    },
    markupFile: FAVICON_DATA_FILE
  }, function() {
    done();
  });
}

faviconsGenerate.description = 'Generate the icons';
task('favicons-generate', faviconsGenerate)

function faviconsInjectMarkups() {
  const htmlCode = `${JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code}`;
  const htmlCodeFormatted = `\n${htmlCode}\n\n`.replace(/^/gm, '\t\t');

  return src(cfg.src.html)
    .pipe(realFavicon.injectFaviconMarkups(htmlCodeFormatted))
    .pipe(dest(cfg.src.root));
}
faviconsInjectMarkups.description = 'Inject favicons markups';
task('favicons-inject-markups', faviconsInjectMarkups)

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
function faviconsCheckForUpdate(done) {
  const currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
  realFavicon.checkForUpdates(currentVersion, function(err) {
    if (err) {
      throw err;
    }
  });
  done();
}

faviconsCheckForUpdate.description = 'Check for updates on RealFaviconGenerator';
task('favicons-check-for-update', faviconsCheckForUpdate)
