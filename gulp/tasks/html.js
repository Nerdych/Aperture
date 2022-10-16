// Core
import gulp from 'gulp';
import fileInclude from 'gulp-file-include';

// Pathes
import { folderPath } from '../config/path.js';

// Plugins
import { plugins } from '../config/plugins.js';

export function html() {
  return gulp
    .src(folderPath.src.html)
    .pipe(fileInclude())
    .pipe(plugins.replace(/@img\//g, 'images/'))
    .pipe(gulp.dest(folderPath.build.html));
}
