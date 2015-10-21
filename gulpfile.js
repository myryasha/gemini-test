var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch'),
	plumber = require('gulp-plumber');

// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});


gulp.task('concat', function () {
	return gulp.src(['./js/*.js', '!./js/app.js'])
			.pipe(plumber({errorHandler: log}))
			.pipe(sourcemaps.init())
			.pipe(babel({blacklist: 'useStrict'}))
			.pipe(concat('app.js'))
			.pipe(sourcemaps.write('maps/'))
			.pipe(gulp.dest('./js/'));
});


function log(error) {

	console.log(("[" + error.name + " in " + error.plugin + "]"),
	error.message + "]");

};

gulp.task('watch', function () {
	watch(['./js/*.js', '!./js/app.js'], function() {
		gulp.start('concat');
	});
});

gulp.task('default', function () {
	gulp.start('browser-sync', 'watch');
});