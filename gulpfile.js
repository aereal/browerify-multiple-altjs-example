var gulp       = require('gulp');
var babelify   = require('babelify');
var browserify = require('browserify');

gulp.task('default', function () {
  var src = browserify('src/index.es6')
    .plugin('tsify')
    .transform(babelify)
    .bundle();
  return src
    .on('error', function (err) { console.error(err) })
    .pipe(process.stdout)
});
