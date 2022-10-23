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
import { fonts } from './gulp/tasks/fonts.js';
import { sprite } from './gulp/tasks/sprite.js';

function watcher() {
  gulp.watch(folderPath.watch.files, copy);
  gulp.watch(folderPath.watch.html, html);
  gulp.watch(folderPath.watch.scss, scss);
  gulp.watch(folderPath.watch.js, js);
  gulp.watch(folderPath.watch.images, images);
  gulp.watch(folderPath.watch.videos, videos);
}

const mainTasks = gulp.parallel(copy, html, scss, js, images, videos, fonts, sprite);
const devTasks = gulp.parallel(watcher, server);

const dev = gulp.series(reset, mainTasks, devTasks);
const build = gulp.series(reset, mainTasks);

export { dev };
export { build };
export { sprite };
