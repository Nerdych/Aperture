// Core
import gulp from 'gulp';
import webpack from 'webpack-stream';

// Pathes
import { folderPath } from '../config/path.js';

// Plugins
import { plugins } from '../config/plugins.js';

export function js() {
  return gulp
    .src(folderPath.src.js, { sourcemaps: true })
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      webpack({
        mode: 'development',
        output: {
          filename: 'index.min.js',
        },
      })
    )
    .pipe(gulp.dest(folderPath.build.js))
    .pipe(plugins.browsersync.stream());
}
