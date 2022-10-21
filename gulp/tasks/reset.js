// Core
import { deleteAsync } from 'del';

// Paths
import { folderPath } from '../config/path.js';

export async function reset() {
  return await deleteAsync(folderPath.clean);
}
