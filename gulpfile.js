var source = require('vinyl-source-stream');
var gulp = require('gulp');
var postcss = require('gulp-postcss');
// css
var precss = require('precss');
var autoprefixer = require('autoprefixer');


gulp.task('css', function () {
  var processors = [
  	autoprefixer,
  	precss
  ];
  return gulp.src('./css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css/postcss'));
});
