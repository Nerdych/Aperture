import * as path from 'path';

const rootFolder = path.basename(path.resolve());
const __dirname = path.resolve();

const buildFolder = './dist';
const srcFolder = './src';

function replaceBackslash(path) {
  return path.replaceAll('\\', '/');
}

export const folderPath = {
  build: {
    html: replaceBackslash(path.resolve(__dirname, buildFolder)),
    files: replaceBackslash(path.resolve(__dirname, buildFolder, 'files')),
  },
  src: {
    files: replaceBackslash(
      path.resolve(__dirname, srcFolder, 'files', '**', '*.*')
    ),
    html: replaceBackslash(path.resolve(__dirname, srcFolder, '*.html')),
  },
  watch: {
    files: replaceBackslash(
      path.resolve(__dirname, srcFolder, 'files', '**', '*.*')
    ),
    html: replaceBackslash(path.resolve(__dirname, srcFolder, '**', '*.html')),
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: '',
};
