// Core
import gulp from 'gulp';

// Paths
import { folderPath } from './gulp/config/path.js';

// Tasks
import { reset } from './gulp/tasks/reset.js';
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { videos } from './gulp/tasks/videos.js';

function watcher() {
  gulp.watch(folderPath.watch.files, copy);
  gulp.watch(folderPath.watch.html, html);
  gulp.watch(folderPath.watch.scss, scss);
  gulp.watch(folderPath.watch.js, js);
  gulp.watch(folderPath.watch.images, images);
  gulp.watch(folderPath.watch.videos, videos);
}

const mainTasks = gulp.parallel(copy, html, scss, js, images, videos);
const serverTasks = gulp.parallel(watcher, server);

const dev = gulp.series(reset, mainTasks, serverTasks);

gulp.task('default', dev);
