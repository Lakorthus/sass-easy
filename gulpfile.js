const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('caimito/**/*.scss')
    .pipe(sass())
    .pipe(dest('public',{ sourcemaps: true }))
}

function watchTask() {
  watch(['caimito/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)