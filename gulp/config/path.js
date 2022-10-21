// Core
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
    js: replaceBackslash(path.join(__dirname, buildFolder, 'scripts')),
    images: replaceBackslash(path.join(__dirname, buildFolder, 'images')),
    videos: replaceBackslash(path.join(__dirname, buildFolder, 'videos')),
    fonts: replaceBackslash(path.join(__dirname, buildFolder, 'fonts')),
  },
  src: {
    files: replaceBackslash(path.join(__dirname, srcFolder, 'files', '**', '*.*')),
    html: replaceBackslash(path.join(__dirname, srcFolder, '*.html')),
    scss: replaceBackslash(path.join(__dirname, srcFolder, 'assets', 'styles', 'styles.scss')),
    js: replaceBackslash(path.join(__dirname, srcFolder, 'assets', 'scripts', '**', '*.js')),
    images: replaceBackslash(path.join(__dirname, srcFolder, 'assets', 'images', '**', '*.{jpg,jpeg,png,gif,webp}')),
    svg: replaceBackslash(path.join(__dirname, srcFolder, 'assets', 'images', '**', '*.svg')),
    videos: replaceBackslash(path.join(__dirname, srcFolder, 'assets', 'videos', '**', '*.*')),
  },
  watch: {
    files: replaceBackslash(path.join(__dirname, srcFolder, 'files', '**', '*.*')),
    html: replaceBackslash(path.join(__dirname, srcFolder, '**', '*.html')),
    scss: replaceBackslash(path.join(__dirname, srcFolder, '**', '*.scss')),
    js: replaceBackslash(path.join(__dirname, srcFolder, '**', '*.js')),
    images: replaceBackslash(path.join(__dirname, srcFolder, 'images', '**', '*.{jpg,jpeg,png,gif,webp,svg}')),
    videos: replaceBackslash(path.join(__dirname, srcFolder, 'assets', '**', '*.{mp4,avi,webm}')),
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: '',
};
