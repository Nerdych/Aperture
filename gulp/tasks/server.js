// Plugins
import { plugins } from '../config/plugins.js';

// Paths
import { folderPath } from '../config/path.js';

export function server() {
  return plugins.browsersync.init({
    server: {
      baseDir: folderPath.build.html,
    },
    notify: false,
    port: 3001,
  });
}
