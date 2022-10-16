// Core
import gulp from 'gulp';
import fileInclude from 'gulp-file-include';

// Pathes
import { folderPath } from '../config/path.js';

export function html() {
  return gulp
    .src(folderPath.src.html)
    .pipe(fileInclude())
    .pipe(gulp.dest(folderPath.build.html));
}
