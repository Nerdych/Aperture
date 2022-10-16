import * as path from 'path';

const rootFolder = path.basename(path.resolve());

const buildFolder = './dist';
const srcFolder = './src';
const __dirname = path.resolve();

function replaceBackslash(path) {
  return path.replaceAll('\\', '/');
}

export const folderPath = {
  build: {
    files: replaceBackslash(path.resolve(__dirname, buildFolder, 'files')),
  },
  src: {
    files: replaceBackslash(
      path.resolve(__dirname, srcFolder, 'files', '**', '*.*')
    ),
  },
  watch: {
    files: replaceBackslash(
      path.resolve(__dirname, srcFolder, 'files', '**', '*.*')
    ),
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: '',
};
