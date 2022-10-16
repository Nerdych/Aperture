import * as path from 'path';

const rootFolder = path.basename(path.resolve());

const buildFolder = './dist';
const srcFolder = './src';
const __dirname = path.resolve();

console.log(path.resolve(__dirname, 'hello'));

export const folderPath = {
  build: {
    files: path.resolve(__dirname, buildFolder, 'files'),
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {},
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: '',
};
