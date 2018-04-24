'use strict'

import gulp from 'gulp'
import pug from 'gulp-pug'
import sass from 'gulp-sass'
import concat from 'gulp-concat'
import minifyCSS from 'gulp-csso'
import SourceMaps from 'gulp-sourcemaps'
import changed from 'gulp-changed'
import Notify from 'gulp-notify'
import babel from "gulp-babel"
import fs from "fs"
import babelify from "babelify"
import browserify from "browserify"
import buffer from "vinyl-buffer"
import source from "vinyl-source-stream"

var browserSync = require('browser-sync').create()

//Error Handler
var handleErrors = function () {
  Notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, arguments)

  // Keep gulp from hanging on this task
  this.emit('end')
}

gulp.task('serve', function () {

  browserSync.init({
    server: './build'
  })

  gulp.watch('src/scripts/**/*.js', ['js'])
  gulp.watch('src/styles/**/*.scss', ['css'])
  gulp.watch('src/views/**/*.pug', ['html'])
})

gulp.task('html', function(){
  return gulp.src('src/views/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .on('error', handleErrors)
    .pipe(changed('app', { extension: '.html' }))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream())
})

gulp.task('css', function(){
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream())
})

gulp.task('js', function(){
  var bundler = browserify({
    entries: 'src/scripts/main.js',
    debug: true
  })
  bundler.transform(babelify)

  bundler.bundle()
    .on('error', handleErrors)
    .pipe(source('main.js'))
    .on('error', handleErrors)
    .pipe(buffer())
    .pipe(SourceMaps.init())
    .pipe(concat('app.min.js'))
    .pipe(babel())
    .pipe(SourceMaps.write())
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream())
})

gulp.task('copy', function () {
  gulp.src('src/images/**/*')
    .pipe(gulp.dest('build/images'))
})

gulp.task('default', [ 'html', 'css', 'js', 'copy', 'serve' ])
