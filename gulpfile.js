var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

function compileScript(dest, minify) {
    if (minify) {
        gulp.src(['./lib/constants.js', './lib/utils.js', './lib/ytplayer.js', './lib/ui.js' , './lib/index.js'])
        .pipe(concat('musicwithstyle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest))
    } else {
        gulp.src(['./lib/constants.js', './lib/utils.js', './lib/ytplayer.js', './lib/ui.js' , './lib/index.js'])
        .pipe(concat('musicwithstyle.js'))
        .pipe(gulp.dest(dest))
    }
}

function compile(done) {
    compileScript('./dist/', true);
    compileScript('./docs/');
    done();
}
  
exports.default = compile;
