var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sassFiles = ['sass/**/*.scss','sass/**/*.sass'];
gulp.task("sass", function () {
  gulp.src(sassFiles)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('static/css/'));
});

gulp.task("watch", function () {
  gulp.watch(sassFiles, ['sass']);
});

gulp.task('default', ['sass']);


