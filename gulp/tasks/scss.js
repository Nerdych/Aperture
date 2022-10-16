// Core
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import groupMediaQueries from 'gulp-group-css-media-queries';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';

// Pathes
import { folderPath } from '../config/path.js';

// Plugins
import { plugins } from '../config/plugins.js';

const sass = gulpSass(dartSass);

export function scss() {
  return gulp
    .src(folderPath.src.scss, { sourcemaps: true })
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: 'SCSS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(plugins.replace(/@img\//g, '../images/'))
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
    )
    .pipe(groupMediaQueries())
    .pipe(
      webpcss({
        webpClass: '.webp',
        noWebpClass: '.no-webp',
      })
    )
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserlist: ['last 3 versions'],
        cascade: true,
      })
    )
    .pipe(gulp.dest(folderPath.build.css))
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
    .pipe(gulp.dest(folderPath.build.css))
    .pipe(plugins.browsersync.stream());
}
