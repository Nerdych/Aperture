// Core
import gulp from 'gulp';

// Pathes
import { folderPath } from './gulp/config/path.js';

// Tasks
import { copy } from './gulp/tasks/copy.js';

gulp.task('default', copy);
