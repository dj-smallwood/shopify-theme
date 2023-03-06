const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');

gulp.task('sass', function () {
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cleanCss())
		.pipe(gulp.dest('assets'))
});

gulp.task('watch', function () {
	gulp.watch('src/scss/*.scss', gulp.series('sass'));
});
