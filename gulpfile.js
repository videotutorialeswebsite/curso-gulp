var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('resize', function() {
   gulp.src('./in/*')
    .pipe(imageResize({
       width: 800,
       height: 600,
       crop: true,
       upscale: false
   }))
    .pipe(gulp.dest('./out/'));
});