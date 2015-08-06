var gulp = require('gulp');
var browserSync = require('browser-sync');
var ghpages = require('gulp-gh-pages');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');

gulp.task('browser-sync', function() {
    browserSync.init(["app/*.css", 'app/*.js','app/*.html'], {
        server: {
            baseDir: "./app"
        }
    });
});

var files = ['app/main.css',
            'app/countries-list/*',
            'app/country-detail/*',
            'app/home/*',
            'app/bower_components/angular/angular.js',
            'app/utilities/calendar-range/calendarRange.js',
            'app/*.html',
            'app/*.js'
            ];

gulp.task('build', function() {
    return gulp.src(files,{base:'./app'})
    .pipe(gulp.dest('./build'));
});

gulp.task('deploy', ['build'],function() {
    return gulp.src('./build/**/*').pipe(ghpages());
});

gulp.task('default', ['browser-sync'], function () {
    
});