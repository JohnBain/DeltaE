var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var wrap = require('gulp-wrap-exports');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
   return browserify('./src/index.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('deltae.bower.min.js'))
        // globalify
        .pipe(streamify(wrap({ name: 'DeltaE' })))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./src/'));
});