var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    cssjanus = require('gulp-cssjanus'),
    rtlcss = require('gulp-rtlcss'),
    rename = require('gulp-rename'),
    flip = require('gulp-css-flip');

var srcPath = "src/**/**";




gulp.task('stl:p', function () {
  return gulp.src(srcPath + '.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded' // expanded, compressed
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions', 'ie >= 9', 'iOS >= 6', 'Android >= 4']
    }))
    .pipe(sourcemaps.write('maps'))
    // .pipe(gulp.dest(cfg.cssPath))
    .pipe(gulp.dest(function (file) {
      return file.base;
    }));

});


gulp.task('watch', function () {
  gulp.watch(srcPath + '/**/*.scss', ['stl:p']);
  // gulp.watch(cfg.scriptsPath + '/**/*.js', ['conc']);
  // gulp.watch(cfg.hamlPath + '/**/*.haml', ['haml']);
  //gulp.watch(cfg.scriptsPath + '/**/*.js', ['conc', 'bsr']);
  //gulp.watch('dist/*.html', ['bsr']);
});


gulp.task('default', ['watch']);
