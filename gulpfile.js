// Core
import gulp from 'gulp';

// Pathes
import { folderPath } from './gulp/config/path.js';

// Tasks
import { copy } from './gulp/tasks/copy.js';

function watcher() {
  gulp.watch(folderPath.watch.files, copy);
}

const dev = gulp.series(copy, watcher);

gulp.task('default', dev);
