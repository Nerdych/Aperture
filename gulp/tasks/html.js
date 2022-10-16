// Core
import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import webpHtmlNoSvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';

// Pathes
import { folderPath } from '../config/path.js';

// Plugins
import { plugins } from '../config/plugins.js';

export function html() {
  return gulp
    .src(folderPath.src.html)
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: 'HTML',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(fileInclude())
    .pipe(plugins.replace(/@img\//g, 'images/'))
    .pipe(webpHtmlNoSvg())
    .pipe(
      versionNumber({
        value: '%DT%',
        append: {
          key: '_v',
          cover: 0,
          to: ['css', 'js'],
        },
        output: {
          file: 'gulp/version.json',
        },
      })
    )
    .pipe(gulp.dest(folderPath.build.html))
    .pipe(plugins.browsersync.stream());
}
