'use strict'

import gulp from 'gulp'
import pug from 'gulp-pug'
import sass from 'gulp-sass'
import concat from 'gulp-concat'
import minifyCSS from 'gulp-csso'
import SourceMaps from 'gulp-sourcemaps'
import changed from 'gulp-changed'
import Notify from 'gulp-notify'
import babel from 'gulp-babel'
import babelify from 'babelify'
import browserify from 'browserify'
import buffer from 'vinyl-buffer'
import source from 'vinyl-source-stream'
import browserSync from 'browser-sync'

//Error Handler
const handleErrors = () => {
  Notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, arguments)

  // Keep gulp from hanging on this task
  this.emit('end')
}

const serve = () => {

  browserSync.init({
    server: './build'
  })

  gulp.watch('src/scripts/**/*.js', js)
  gulp.watch('src/styles/**/*.scss', css)
  gulp.watch('src/views/**/*.pug', html)
}

const html = () => {
  return gulp.src('src/views/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .on('error', handleErrors)
    .pipe(changed('app', { extension: '.html' }))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream())
}

const css = () => {
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream())
}

  const js = () => {
  const bundler = browserify({
    entries: 'src/scripts/main.js',
    debug: true
  })
    .transform(babelify)
    .bundle()
    .on('error', handleErrors)
    .pipe(source('main.js'))
    .on('error', handleErrors)
    .pipe(buffer())
    // .pipe(SourceMaps.init())
    .pipe(concat('app.min.js'))
    .pipe(babel())
    // .pipe(SourceMaps.write())
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream())

    return bundler
}

const images = () => {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('build/images'))
}

const fonts = () => {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('build/fonts'))
}

gulp.task('default', gulp.series(html, css, js, images, fonts, serve))
gulp.task('build', gulp.series(html, css, js, images, fonts))
