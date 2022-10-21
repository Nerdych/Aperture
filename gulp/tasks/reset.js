// Core
import { deleteAsync } from 'del';

// Paths
import { folderPath } from '../config/path.js';

export function reset() {
  for (let i = 0; i < 5; i++) {
    console.log(++i);
  }
  return deleteAsync(folderPath.clean);
}
