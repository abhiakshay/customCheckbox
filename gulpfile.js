/**
 * Created by AkshayP on 12/15/2017.
 */
var gulp = require('gulp'),
    gulpSync = require('gulp-sync')(gulp),
    concat = require('gulp-concat');
    plumber = require('gulp-plumber');


gulp.task('css',function () {
    return gulp.src('src/css/*.css')
        .pipe(plumber())
        .pipe(concat('customCheckbox.css'))
        .pipe(gulp.dest('build/css'));
});
gulp.task('build',['sass']);