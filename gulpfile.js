const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('caimito/**/*.scss')
  .pipe(sass({ outputStyle: 'compressed' }))
  .pipe(purgecss({ content: ['*.html','**/*/*.html'] }))
  .pipe(dest('CSS',{ sourcemaps: true }))
}

function watchTask() {
  watch(['caimito/**/*.scss','*.html','**/*/*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)