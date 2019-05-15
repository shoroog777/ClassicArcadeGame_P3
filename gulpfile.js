const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('test', function(){
	console.log('Test');
});

gulp.task('copyHTML', function(){
	return gulp.src('src/*.html').pipe(gulp.dest('dest'));
});

gulp.task('copyCSS', function(){
	return gulp.src('src/css/*.css').pipe(gulp.dest('dest'));
});

gulp.task('imagemin', () =>
    gulp.src('src/images/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dest/images'))
);

gulp.task('concatJs', () =>
    return gulp.src('src/js/*.js')
			.pipe(babel({
				presets: ['@babel/env']
			}))
			.pipe(concat('all.js'))
			.pipe(uglify())
			.pipe(gulp.dest('./dest/'))
);
gulp.task('default', ['js-fef'], function(){});