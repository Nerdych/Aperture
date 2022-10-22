// Core
import gulp from 'gulp';

// Paths
import { folderPath } from '../config/path.js';

// Plugins
import { plugins } from '../config/plugins.js';

export function fonts() {
  return gulp
    .src(folderPath.src.fonts)
    .pipe(plugins.plumber())
    .pipe(plugins.newer(folderPath.build.fonts))
    .pipe(gulp.dest(folderPath.build.fonts))
    .pipe(plugins.browsersync.stream());
}
