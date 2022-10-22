// Core
import { deleteAsync } from 'del';

// Paths
import { folderPath } from '../config/path.js';

export function reset() {
  return deleteAsync(folderPath.clean);
}
