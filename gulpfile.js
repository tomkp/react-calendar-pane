var gulp = require('gulp');
var babel = require("gulp-babel");
var clean = require('gulp-clean');


gulp.task('clean', function () {
    return gulp.src(['./dist'], {read: false})
        .pipe(clean())
});


gulp.task('babel', ['clean'], function () {
    return gulp.src('./src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist'))
});


gulp.task('watch', function () {
    return watch('./src/**/*', function () {
        gulp.start('default');
    });
});


gulp.task('default', ['babel']);
