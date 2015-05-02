var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var htmlmin = require('gulp-html-minifier');
var inline = require('gulp-inline');

gulp.task('minimize', function() {
  gulp.src('./src/video-js.html')
    .pipe(vulcanize({
      abspath: '',
      excludes: [],
      stripExcludes: false,
      inlineScripts: true
    }))
    .pipe(inline({}))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {
  gulp.src([
    'bower_components/videojs/dist/video-js/font/**/*',
  ])
    .pipe(gulp.dest('./dist/font'));
});

gulp.task('test', function() {
  // TODO: add unit tests with every events / methods API and karma
});

gulp.task('build', ['minimize', 'copy']);

gulp.task('default', ['build', 'test']);
