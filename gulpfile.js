var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

function compileScript(dest) {
    gulp.src(['./lib/constants.js', './lib/utils.js', './lib/ui.js' , /*'./lib/ytplayer.js', */'./lib/index.js'])
    .pipe(concat('musicwithstyle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(dest))
}

function compile(done) {
    compileScript('./dist/');
    compileScript('./docs/');
    done();
}
  
exports.default = compile;
