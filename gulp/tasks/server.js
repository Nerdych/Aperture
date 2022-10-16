// Plugins
import { folderPath } from '../config/path.js';
import { plugins } from '../config/plugins.js';

export function server() {
  return plugins.browsersync.init({
    server: {
      baseDir: folderPath.build.html,
    },
    notify: false,
    port: 3000,
  });
}
