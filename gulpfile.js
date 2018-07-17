var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');


gulp.task('styles', function(){
  gulp.src(['assets/scss/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('assets/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css/'))
});

gulp.task('scripts', function(){
  return gulp.src(['assets/js/**/*.js', '!assets/js/**/*.js'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(gulp.dest('assets/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'))
});

gulp.task('default', function(){
  gulp.watch("assets/scss/**/*.scss", ['styles']);
  gulp.watch("assets/js/**/*.js", ['scripts']);
});