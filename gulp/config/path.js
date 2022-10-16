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
    html: replaceBackslash(path.join(__dirname, buildFolder)),
    files: replaceBackslash(path.join(__dirname, buildFolder, 'files')),
  },
  src: {
    files: replaceBackslash(
      path.join(__dirname, srcFolder, 'files', '**', '*.*')
    ),
    html: replaceBackslash(path.join(__dirname, srcFolder, '*.html')),
  },
  watch: {
    files: replaceBackslash(
      path.join(__dirname, srcFolder, 'files', '**', '*.*')
    ),
    html: replaceBackslash(path.join(__dirname, srcFolder, '**', '*.html')),
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: '',
};
