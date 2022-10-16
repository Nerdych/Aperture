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
    files: replaceBackslash(path.join(__dirname, buildFolder, 'files')),
    html: replaceBackslash(path.join(__dirname, buildFolder)),
    css: replaceBackslash(path.join(__dirname, buildFolder, 'css')),
  },
  src: {
    files: replaceBackslash(
      path.join(__dirname, srcFolder, 'files', '**', '*.*')
    ),
    html: replaceBackslash(path.join(__dirname, srcFolder, '*.html')),
    scss: replaceBackslash(
      path.join(__dirname, srcFolder, 'assets', 'scss', '*.scss')
    ),
  },
  watch: {
    files: replaceBackslash(
      path.join(__dirname, srcFolder, 'files', '**', '*.*')
    ),
    html: replaceBackslash(path.join(__dirname, srcFolder, '**', '*.html')),
    scss: replaceBackslash(path.join(__dirname, srcFolder, '**', '*.scss')),
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: '',
};
