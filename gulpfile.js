var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require("gulp-htmlmin");
var del = require("del");

gulp.task("cleanDir", function(){
	del('./dist/css');
})

gulp.task("cleanFile", function(){
	del('./dist/*.html');
})

gulp.task('move-css', ['cleanDir'] ,function(){
	
	return gulp.src('./source/scss/*.scss')	
			.pipe(sass({outputStyle: 'compressed'}))
			.pipe(gulp.dest('./dist/css'));
			
})

gulp.task('move-html', ['cleanFile'], function(){

	return gulp.src('./source/*.html')
			.pipe(htmlmin({collapseWhitespace: true}))
			.pipe(gulp.dest('./dist'));
			
})

gulp.task('monitorar', function(){
	gulp.watch('./source/scss/*.scss', ['move-css']);
	gulp.watch('./source/*.html', ['move-html']);

})