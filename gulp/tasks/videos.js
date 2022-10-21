// Core
import gulp from 'gulp';

// Paths
import { folderPath } from '../config/path.js';

// Plugins
import { plugins } from '../config/plugins.js';

export function videos() {
  return gulp
    .src(folderPath.src.videos)
    .pipe(plugins.plumber())
    .pipe(plugins.newer(folderPath.build.videos))
    .pipe(gulp.dest(folderPath.build.videos))
    .pipe(plugins.browsersync.stream());
}
