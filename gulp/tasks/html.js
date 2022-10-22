// Core
import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import versionNumber from 'gulp-version-number';
import htmlmin from 'gulp-htmlmin';

// Paths
import { folderPath } from '../config/path.js';

// Plugins
import { plugins } from '../config/plugins.js';

// Constants
import { constants } from '../config/constants.js';

export function html() {
  return gulp
    .src(folderPath.src.html)
    .pipe(plugins.plumber())
    .pipe(fileInclude())
    .pipe(plugins.replace(/@img\//g, 'images/'))
    .pipe(plugins.replace(/@styles\//g, 'css/'))
    .pipe(plugins.replace(/@scripts\//g, 'scripts/'))
    .pipe(plugins.replace(/@videos\//g, 'videos/'))
    .pipe(plugins.replace(/[.]scss/g, '.min.css'))
    .pipe(
      plugins.gulpIf(
        constants.isBuild,
        htmlmin({
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: true,
          removeComments: true,
        })
      )
    )
    .pipe(
      plugins.gulpIf(
        constants.isBuild,
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
    )
    .pipe(gulp.dest(folderPath.build.html))
    .pipe(plugins.gulpIf(constants.isDev, plugins.browsersync.stream()));
}
