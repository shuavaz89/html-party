var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

function compileScript(done) {
    gulp.src([/*'./lib/ytplayer.js', */'./lib/index.js'])
    .pipe(concat('musicwithstyle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
    done();
}
  
exports.default = compileScript;
