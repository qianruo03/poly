var gulp =require('gulp');
var minifyhtml=require("gulp-minify-html");
var minifycss=require("gulp-clean-css");
//html压缩
gulp.task('htmltask',function(){
	gulp.src('*.html')
	.pipe(minifyhtml())
	.pipe(gulp.dest('dist'))
});

//css压缩
gulp.task('csstask',function(){
	gulp.src('css/*.css')
	.pipe(minifycss())
	.pipe(gulp.dest('dist/css'))
});
