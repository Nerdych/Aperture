// Core
import { deleteAsync } from 'del';

// Pathes
import { folderPath } from '../config/path.js';

export async function reset() {
  return await deleteAsync(folderPath.clean);
}
