Caimito, like the exotic fruit from South America is a personal project to make Sass easy, fun and customisable.

To use Caimito, do these three simple steps:

1. Npm -i or Npm install to add Sass and Gulp.js.

2. Go into gulpfile.js and edit the function 

function buildStyles() {
  return src('sass/**/*.scss')
  .pipe(sass({ outputStyle: 'compressed' }))
  .pipe(purgecss({ content: ['*.html'] }))
  .pipe(dest('CSS',{ sourcemaps: true }))
}

function watchTask() {
  watch(['sass/**/*.scss','*.html'], buildStyles)
}

3. Start using classes from Caimito or write your customs CSS/SCSS in sass/index.SCSS

Feel free to modify this file to make it better, you can send me a pull request to improve the library.

-Created by Julio Velezmoro

