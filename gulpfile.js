var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var postcss = require('gulp-postcss');
var notify = require('gulp-notify');
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
