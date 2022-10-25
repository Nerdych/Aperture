// Core
import gulp from 'gulp';
import concat from 'gulp-concat';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';

// Paths
import { folderPath } from '../config/path.js';

// Plugins
import { plugins } from '../config/plugins.js';

// Constants
import { constants } from '../config/constants.js';

export function js() {
  return gulp
    .src(folderPath.src.js, { sourcemaps: true })
    .pipe(plugins.plumber())
    .pipe(
      webpackStream(
        {
          mode: constants.isBuild ? 'production' : 'development',
          performance: { hints: false },
          plugins: [],
          module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['babel-plugin-root-import'],
                  },
                },
              },
            ],
          },
          optimization: {
            minimize: constants.isBuild,
            minimizer: [
              new TerserPlugin({
                terserOptions: { format: { comments: false } },
                extractComments: false,
              }),
            ],
          },
        },
        webpack
      )
    )
    .pipe(concat('index.js'))
    .pipe(gulp.dest(folderPath.build.js))
    .pipe(plugins.browsersync.stream());
}
