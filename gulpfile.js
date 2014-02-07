var gulp = require('gulp') ;
var gutil = require('gulp-util');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');

var TEMPLATE_DATA = {
  main_nav: [
    { name: 'For Leading Companies' },
    { name: 'For Enterpreneurs' },
    { name: 'Results' },
    { name: 'Insight & News' },
    { name: 'About Us' },
    { name: 'Contact Us' },
    { name: 'Innovation.NET Blog' },
  ]
};

gulp.task('templates', function() {
  gulp.src('./src/templates/*.jade')
    .pipe(jade({
      pretty: true,
      locals: TEMPLATE_DATA
    }))
    .pipe(gulp.dest('./dist/'))
  ;
});

gulp.task('styles', function() {
  gulp.src('./src/styles/*.styl')
    .pipe(stylus({
      paths: ['./node_modules/']
    }))
    .pipe(gulp.dest('./dist/css'))
  ;
});

gulp.task('scripts', function() {
  gulp.src('./src/js/*')
    .pipe(gulp.dest('./dist/js'))
  ;
});

gulp.task('watch', function() {
  gulp.watch('./src/templates/*.jade', ['templates']);
  gulp.watch('./src/styles/*.styl', ['styles']);
  gulp.watch('./src/js/*', ['scripts']);
});

gulp.task('default', ['templates', 'styles', 'scripts']);
