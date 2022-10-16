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
    js: replaceBackslash(path.join(__dirname, buildFolder, 'js')),
  },
  src: {
    files: replaceBackslash(
      path.join(__dirname, srcFolder, 'files', '**', '*.*')
    ),
    html: replaceBackslash(path.join(__dirname, srcFolder, '*.html')),
    scss: replaceBackslash(
      path.join(__dirname, srcFolder, 'assets', 'styles', 'styles.scss')
    ),
    ts: replaceBackslash(
      path.join(__dirname, srcFolder, 'assets', 'scripts', 'index.ts')
    ),
  },
  watch: {
    files: replaceBackslash(
      path.join(__dirname, srcFolder, 'files', '**', '*.*')
    ),
    html: replaceBackslash(path.join(__dirname, srcFolder, '**', '*.html')),
    scss: replaceBackslash(path.join(__dirname, srcFolder, '**', '*.scss')),
    ts: replaceBackslash(path.join(__dirname, srcFolder, '**', '*.ts')),
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: '',
};
