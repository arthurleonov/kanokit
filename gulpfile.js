var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-ruby-sass'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require("gulp-notify"),
    gutil = require('gulp-util');

gulp.task('default', ['scripts', 'sass', 'watch']);

// Scripts Task
gulp.task('scripts', function(){
  return gulp.src('js/*.js')
  .pipe(concat('all.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js'))
  .pipe(notify('Spiral - JS uglified'))
  .on('error', gutil.log);
});

// Sass

gulp.task('sass', function () {
  return sass('scss/main.scss', {
      style: 'expanded'
    })
    .on('error', sass.logError)
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('css'))
    .pipe(notify('CSS compiled, prefixed, and minified.'))
    .on('error', gutil.log);
});


// Img Compress

gulp.task('compress', function () {
  return gulp.src('img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('img'));
});


//watch

gulp.task('watch',function(){
  // gulp.watch('js/*.js', ['scripts']);
  gulp.watch('scss/**/*.scss', ['sass']);
});
