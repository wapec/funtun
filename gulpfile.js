var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('./*.html')
    .on('error', swallowError)
    .pipe(livereload());
});

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss') // gets all files ending with .scss in scss and children dirs
    .pipe(sass({
      compass: true
    }))
    .on('error', swallowError)
    .pipe(gulp.dest('css'))
    .pipe(livereload());
})

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('./*.html', ['html']);
  // Other watchers
})

function swallowError(error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}

gulp.task('hello', function() {
  console.log('hello');
});

gulp.task('start', ['connect', 'watch']);
