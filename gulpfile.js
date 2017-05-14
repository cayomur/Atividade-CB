var gulp = require("gulp");
var del = require("del");

gulp.task("cleanDir", function(){
	del('./dist/css');
})

gulp.task("cleanFile", function(){
	del('./dist/*.html');
})

gulp.task('move-css', ['cleanDir'] ,function(){
	
	return gulp.src('./source/scss/*.scss')
			.pipe(gulp.dest('./dist/css'));
			
})

gulp.task('move-html', ['cleanFile'], function(){

	return gulp.src('./source/*.html')
			.pipe(gulp.dest('./dist'));
			
})

gulp.task('monitor', function(){
	gulp.watch('./source/scss/*.scss', ['move-css']);
	gulp.watch('./source/*.html', ['move-html']);

})