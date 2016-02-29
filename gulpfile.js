var gulp = require('gulp');
//var sass = require('gulp-ruby-sass')
var sass = require('gulp-sass');
var moduleImporter = require('sass-module-importer');
var connect = require('gulp-connect');
// requires browserify and vinyl-source-stream
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    port: 4000,
    host: 'localhost',
    fallback: './public/index.html'
  });
});

gulp.task('browserify', function() {
    // Grabs the app.js file
    //return browserify('./app/app.js')
    return browserify('./app/app.js')
    // bundles it and creates a file called main.js
      .bundle()
      .pipe(source('main.js'))
      // saves it the public/js/ directory
      .pipe(gulp.dest('./public/js/'));
});

gulp.task('sass', function() {
    //return sass('sass/style.sass')
    return gulp.src('./sass/style.sass')
      .pipe(sass({ importer: moduleImporter() }))
      .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function() {
  gulp.watch('app/**/*.js', ['browserify'])
  gulp.watch('sass/style.sass', ['sass'])
});

gulp.task('default', ['connect', 'watch'])