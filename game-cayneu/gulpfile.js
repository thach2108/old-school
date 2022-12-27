/*global require*/
"use strict";

var gulp = require('gulp'),
  util = require('gulp-util'),
  path = require('path'),
  data = require('gulp-data'),
  pug = require('gulp-pug'),
  prefix = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  fs = require('fs'),
  rename = require("gulp-rename"),
  minify = require('gulp-minify'),
  concat = require('gulp-concat'),
  browserSync = require('browser-sync');

/*
 * Directories here
 */
var paths = {
  public: './public/',
  sass: './src/sass/',
  js: './src/js/',
  css: './public/',
  data: './src/_data/',
  fonts: './public/fonts',
  API: './src/API/'
};

/**
 * Compile .pug files and pass in data from json file
 * matching file name. index.pug - index.pug.json
 */

gulp.task('pug', function () {
  return gulp.src('./src/*.pug')
    .pipe(data(function (file) {
      return JSON.parse(
        fs.readFileSync(paths.data + 'data.json')
      );
    }))
    .pipe(pug({
      pretty: true // true: not minimy
    }))
    .on('error', function (err) {
      process.stderr.write(err.message + '\n');
      this.emit('end');
    })
    .pipe(gulp.dest(paths.public));
});

gulp.task('prod_pug', function () {
  return gulp.src('./src/*.pug')
    .pipe(data(function (file) {
      return JSON.parse(
        fs.readFileSync(paths.data + 'data.json')
      );
    }))
    .pipe(pug({
      pretty: false // true: not minimy
    }))
    .on('error', function (err) {
      process.stderr.write(err.message + '\n');
      this.emit('end');
    })
    .pipe(gulp.dest(paths.public));
});

/**
 * Recompile .pug files and live reload the browser
 */
gulp.task('rebuild', ['pug', 'sass', 'API'], function () {
  browserSync.reload();
});

/**
 * Wait for pug and sass tasks, then launch the browser-sync Server
 */
gulp.task('browser-sync', ['sass', 'pug', 'jscompress', 'API'], function () {
  browserSync({
    server: {
      baseDir: paths.public
    },
    notify: false
  });
});

/**
 * Compile .scss files into public css directory With autoprefixer no
 * need for vendor prefixes then live reload the browser.
 */
gulp.task('sass', function () {
  return gulp.src(paths.sass + '*.scss')
    .pipe(sass({
      includePaths: [paths.sass],
      //outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(
      prefix({
        browsers: ["last 50 versions", "ie >= 9"],
        cascade: false
      })
    )
    //rename
    .pipe(rename('style.css'))

    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});
gulp.task('prod_sass', function () {
  return gulp.src(paths.sass + '*.scss')
    .pipe(sass({
      includePaths: [paths.sass],
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(
      prefix(
        ['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
          cascade: true
        }
      )
    )
    //rename
    .pipe(rename('style.css'))

    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

/**
 * Compile custom fonts famailu
 */
gulp.task('fontsass', function () {
  return gulp.src(paths.sass + 'fonts.scss')
    .pipe(sass({
      includePaths: [paths.sass],
      //outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(
      prefix(
        ['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
          cascade: true
        }
      )
    )
    //rename
    .pipe(rename('fonts.css'))

    .pipe(gulp.dest(paths.fonts))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Minify
gulp.task('jscompress', function () {
  gulp.src([
    paths.js + '/_library_custom.js',
    paths.js + '/_variable.js',
    paths.js + '/_log.js',
    paths.js + '/_http.js',
    paths.js + '/_constants.js',
    paths.js + '/_services.js',
    paths.js + '/_draw.js',
    paths.js + '/_init.js',
    paths.js + '/_var.js',
    paths.js + '/boot.js',
    paths.js + '/load.js',
    paths.js + '/play.js',
    paths.js + '/main.js',
    paths.js + '/script.js',
  ])
    .pipe(concat('bundle.js'))
    .pipe(minify({
      ext: {
        src: '-3f.js',
        min: '.js'
      },
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('prod_jscompress', function () {
  gulp.src(paths.js + '/*.js')
    .pipe(concat('bundle.js'))
    .pipe(minify({
      ext: {
        src: '-3f.js',
        min: '.js'
      },
      noSource: true,
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./public/js'));
});

// build json
gulp.task('API', function () {
  var stream = gulp.src(paths.API + '/*.json')
    .pipe(concat('data.json'))
    .pipe(minify())
    .pipe(gulp.dest('./public/js'));
  return stream;
});

/**
 * Watch scss files for changes & recompile
 * Watch .pug files run pug-rebuild then reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(paths.sass + '**/*.scss', ['sass']);
  gulp.watch(paths.sass + '/*.scss', ['sass', 'fontsass']);
  gulp.watch('./src/**/*.pug', ['rebuild']);
  gulp.watch('./src/js/*.js', ['jscompress']);
  gulp.watch('./src/_data/*.json', ['rebuild']);
  gulp.watch('./src/API/*.json', ['rebuild']);
});

// Build task compile sass and pug.
gulp.task('build', ['sass', 'pug', 'jscompress', 'fontsass', 'API']);

// Build task compile sass and pug for production.
gulp.task('prod', ['prod_sass', 'prod_pug', 'prod_jscompress', 'fontsass', 'API']);


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', ['browser-sync', 'watch', 'prod']);