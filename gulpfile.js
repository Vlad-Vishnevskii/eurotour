
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const del = require("del");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(csso())
    .pipe(rename("styles.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// js-min

// const js_min = () => {
//   return gulp.src('source/js/*.js')
//     .pipe (uglify())
//     .pipe (gulp.dest("build/js"))
// }

//exports.js_min = js_min;

// html-min

const html_min = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

exports.html_min = html_min;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html", gulp.series("html_min")).on("change", sync.reload);
//   gulp.watch("source/js/*.js", gulp.series("js_min")).on("change", sync.reload);
}

// images

// const images = () => {
//   return gulp.src("source/img/**/*.{jpg,png,svg}")
//     .pipe(imagemin([
//       imagemin.optipng({optimizationLevel: 3}),
//       imagemin.mozjpeg({progressive: true}),
//       imagemin.svgo()
//     ]))
// }

//exports.images = images;

//webp

// const webp_convert = () => {
//   return gulp.src("source/img/**/*.{png,jpg}")
//     .pipe(webp({quality: 90}))
//     .pipe(gulp.dest("source/img"))
// }

// exports.webp_convert = webp_convert;

// svg-sprite

// const sprite = () => {
//   return gulp.src("source/img/**/icon-*.svg")
//     .pipe(svgstore())
//     .pipe(rename("sprite.svg"))
//     .pipe(gulp.dest("build/img"))
// }

// exports.sprite = sprite;

//copy

const copy = () => {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/css/*.css",
    "source/*.ico"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
}

exports.copy = copy;

// del

const clean = () => {
  return del("build");
}

// build

const build  =  gulp.series(
  clean,
  copy,
  styles,
  //sprite,
  //js_min,
  html_min
)

exports.build = build;

exports.default = gulp.series(
  build, server, watcher
)
