// Core
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import groupMediaQueries from 'gulp-group-css-media-queries';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';

// Paths
import { folderPath } from '../config/path.js';

// Plugins
import { plugins } from '../config/plugins.js';

// Constants
import { constants } from '../config/constants.js';

const sass = gulpSass(dartSass);

export function scss() {
  return gulp
    .src(folderPath.src.scss, { sourcemaps: true })
    .pipe(plugins.plumber())
    .pipe(plugins.replace(/@img\//g, '../images/'))
    .pipe(plugins.replace(/@videos\//g, '../videos/'))
    .pipe(plugins.replace(/@fonts\//g, '../fonts/'))
    .pipe(sass())
    .pipe(
      autoprefixer({
        grid: 'autoplace',
        flexbox: true,
        cascade: true,
      })
    )
    .pipe(plugins.gulpIf(constants.isBuild, groupMediaQueries()))
    .pipe(plugins.gulpIf(constants.isBuild, cleanCss()))
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
    .pipe(gulp.dest(folderPath.build.css))
    .pipe(plugins.browsersync.stream());
}
