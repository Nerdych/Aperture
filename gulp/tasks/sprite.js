// Core
import gulp from 'gulp';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';

// Paths
import { folderPath } from '../config/path.js';

// Plugins
import { plugins } from '../config/plugins.js';

export function sprite() {
  return gulp
    .src(folderPath.src.svgIcons)
    .pipe(plugins.plumber())
    .pipe(
      svgstore({
        inlineSvg: true,
      })
    )
    .pipe(rename('icons/sprite.svg'))
    .pipe(gulp.dest(folderPath.build.images));
}
