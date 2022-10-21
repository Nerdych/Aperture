// Core
import gulp from 'gulp';

// Paths
import { folderPath } from '../config/path.js';

// Plugins
import { plugins } from '../config/plugins.js';

export function images() {
  return gulp
    .src(folderPath.src.images)
    .pipe(plugins.plumber())
    .pipe(plugins.newer(folderPath.build.images))
    .pipe(gulp.dest(folderPath.build.images))
    .pipe(gulp.src(folderPath.src.svg))
    .pipe(gulp.dest(folderPath.build.images))
    .pipe(plugins.browsersync.stream());
}
