// Core
import gulp from 'gulp';

// Pathes
import { folderPath } from './gulp/config/path.js';

// Tasks
import { reset } from './gulp/tasks/reset.js';
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';

function watcher() {
  gulp.watch(folderPath.watch.files, copy);
  gulp.watch(folderPath.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html);

const dev = gulp.series(reset, mainTasks, watcher);

gulp.task('default', dev);
