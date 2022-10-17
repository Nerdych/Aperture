// Core
import gulp from 'gulp';
// import webp from 'gulp-webp';
// import imagemin from 'gulp-imagemin';

// Pathes
import { folderPath } from '../config/path.js';

// Plugins
import { plugins } from '../config/plugins.js';

export function images() {
  return (
    gulp
      .src(folderPath.src.images)
      .pipe(
        plugins.plumber(
          plugins.notify.onError({
            title: 'IMAGES',
            message: 'Error: <%= error.message %>',
          })
        )
      )
      .pipe(plugins.newer(folderPath.build.images))
      // Конвертация в webp
      // .pipe(webp())
      // .pipe(gulp.dest(folderPath.build.images))
      // Минимизация изображений
      // .pipe(
      //   imagemin({
      //     progressive: true,
      //     svgoPlugins: [{ removeViewBox: false }],
      //     interlaced: true,
      //     optimizationLevel: 3,
      //   })
      // )
      .pipe(gulp.dest(folderPath.build.images))
      .pipe(gulp.src(folderPath.src.svg))
      .pipe(gulp.dest(folderPath.build.images))
      .pipe(plugins.browsersync.stream())
  );
}
