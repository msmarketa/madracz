const { series, parallel, src, dest, watch } = require("gulp"),
    sass = require("gulp-dart-sass"),
    csso = require("gulp-csso"),
    sourcemaps = require("gulp-sourcemaps");

const watcher = () => {
    watch("./src/scss/**/*.scss", sassCompile);
};

const sassCompile = () =>
    src("./src/scss/index.scss") // this is the source for compilation
        .pipe(sourcemaps.init()) // initalizes a sourcemap
        .pipe(sass.sync().on("error", sass.logError)) // compile SCSS to CSS and also tell us about a problem if happens
        .pipe(csso()) // compresses CSS
        .pipe(sourcemaps.write("./")) // writes the sourcemap
        .pipe(dest("./dist")); // destination of the resulting CSS

exports.develop = series(sassCompile, watcher);
