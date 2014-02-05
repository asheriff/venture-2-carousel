var gulp = require('gulp') ;
var gutil = require('gulp-util');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');

var MAIN_NAV_LINKS = [
  { name: 'For Leading Companies' },
  { name: 'For Enterpreneurs' },
  { name: 'Results' },
  { name: 'Insight & News' },
  { name: 'About Us' },
  { name: 'Contact Us' },
  { name: 'Innovation.NET Blog' },
];

gulp.task('templates', function() {
  gulp.src('./src/templates/*.jade')
    .pipe(jade({
      pretty: true,
      locals: {
        main_nav: MAIN_NAV_LINKS
      }
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('styles', function() {
  gulp.src('./src/styles/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function() {
  gulp.watch('./src/templates/*.jade', ['templates']);
  gulp.watch('./src/styles/*.styl', ['styles']);
});
