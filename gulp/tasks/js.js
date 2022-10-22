// Core
import gulp from 'gulp';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import uglifyEs from 'gulp-uglify-es';

// Paths
import { folderPath } from '../config/path.js';

// Plugins
import { plugins } from '../config/plugins.js';

// Constants
import { constants } from '../config/constants.js';

const uglify = uglifyEs.default;

export function js() {
  return gulp
    .src(folderPath.src.js, { sourcemaps: true })
    .pipe(plugins.plumber())
    .pipe(concat('index.js'))
    .pipe(babel())
    .pipe(plugins.gulpIf(constants.isBuild, uglify()))
    .pipe(gulp.dest(folderPath.build.js))
    .pipe(plugins.browsersync.stream());
}
