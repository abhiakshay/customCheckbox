/**
 * Created by AkshayP on 12/15/2017.
 */
var gulp = require('gulp'),
    gulpsync = require('gulp-sync')(gulp),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    exec = require('gulp-exec'),
    connect = require('gulp-connect'),
    open = require('gulp-open');

gulp.task('css',function () {
    return gulp.src('src/css/*.css')
        .pipe(plumber())
        .pipe(concat('customCheckbox.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('css-min',function () {
    return gulp.src('src/css/*.css')
        .pipe(cssmin())
        .pipe(concat('customCheckbox.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'));
});

gulp.task('html', function () {
    gulp.src('./src/html/*.html')
        .pipe(connect.reload());
});


gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 3002,
        livereload: true
    });
});

gulp.task('open', function(){
    var options = {
        uri: 'http://localhost:3002/src/html/',
        app: 'chrome'
    };
    gulp.src('./src/html/index.html')
        .pipe(open(options));
});
gulp.task('watch', function () {
    gulp.watch(['css'], ['css-min'],['./app/*.html'], ['html']);
});

gulp.task('default',gulpsync.sync(['css','css-min','connect','open','watch']));