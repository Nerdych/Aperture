import gulp from 'gulp';

import { folderPath } from '../config/path.js';

export function copy() {
  return gulp.src(folderPath.src.files).pipe(gulp.dest(folderPath.build.files));
}
