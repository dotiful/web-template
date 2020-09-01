[![](https://github.com/dotiful/web-template/workflows/EditorConfig/badge.svg)](https://github.com/dotiful/web-template/actions?query=workflow%3AEditorConfig)
[![](https://github.com/dotiful/web-template/workflows/dependabot-auto-merge/badge.svg)](https://github.com/dotiful/web-template/actions?query=workflow%3Adependabot-auto-merge)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](.github/code_of_conduct.md) 

* [gulp-starter-kit](https://github.com/justcoded/web-starter-kit)
* [gulp-scss-starter](https://github.com/andreyalexeich/gulp-scss-starter)
* [gulp-webpack-starter](https://github.com/wwwebman/gulp-webpack-starter)
* [blendid](https://github.com/vigetlabs/blendid)
* [gulp-cli](https://github.com/gulpjs/gulp-cli)

# Available Tasks

BuildTaskBuilder exposes the following tasks when using the default config:

### General
- `gulp`: First clears your destination directory, then calls `dev`, then `watch`and then starts up 
    a browserSync webserver
- `gulp prod`: Clears destination, then creates production files
- `gulp serve`: Just boots up and runs the server; changes won't be watched (as no watch tasks are
    started)
- `gulp clean`: Removes the destination folder

### JS
- `jsDev`: Clears JS folder in destination, converts JS files, then halts
- `jsWatch`: Only watches JS files (triggers on change)
- `js`: `jsDev` then `jsWatch`
- `jsProd`: Clears JS folder in destination, converts and minifies files for production

### CSS
- `cssDev`: Clears CSS folder in destination, converts css files, then halts
- `cssWatch`: Only watches CSS files (triggers on change)
- `css`: `cssDev` then `cssWatch`
- `cssProd`: Clears CSS folder in destination, converts and minifies files for production

### HTML
- `htmlDev`: Clears HTML folder in destination, copies all HTML files
- `htmlWatch`: Only watches HTML files (triggers on change)
- `html`: `htmlDev` then `htmlWatch`
- `htmlProd`: Clears HTML folder in destination, converts and minifies files for production

