// Core
import gulp from 'gulp';

// Pathes
import { folderPath } from '../config/path.js';

export function videos() {
  return gulp
    .src(folderPath.src.videos)
    .pipe(gulp.dest(folderPath.build.videos));
}
